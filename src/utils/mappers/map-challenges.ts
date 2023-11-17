import { REGISTERED_USERS } from '@app/content';
import { ChallengesData } from '@app/types/firebase';
import { getFormattedRecordDate } from '@app/utils/get-formatted-date';

export function mapChallenges(challenges: ChallengesData) {
  const currentDate = new Date();
  const currentYear = currentDate.getUTCFullYear();
  if (!challenges?.[currentYear])
    return {
      previousChallenge: null,
      currentChallenge: null,
      nextChallenge: null,
    };

  const getFullMonthName = (date: Date) =>
    date.toLocaleDateString('en-GB', {
      month: 'long',
    });

  const currentMonth = currentDate.getUTCMonth() + 1;
  const previousMonthAsDate = currentDate.setMonth(currentDate.getMonth() - 1);

  const previousRecordYear = currentMonth === 1 ? currentYear - 1 : currentYear;
  const previousRecordMonth = currentMonth === 1 ? 12 : currentMonth - 1;

  const nextRecordYear = currentMonth === 12 ? currentYear + 1 : currentYear;
  const nextRecordMonth = currentMonth === 12 ? 1 : currentMonth + 1;

  const currentChallenge =
    challenges[currentYear.toString()][currentMonth.toString()];
  const previousChallenge =
    challenges[previousRecordYear.toString()][previousRecordMonth.toString()];
  const nextChallenge =
    challenges[nextRecordYear.toString()][nextRecordMonth.toString()];

  const showDiscordImage = REGISTERED_USERS.find(
    (user) => user.username === previousChallenge?.winner?.username
  )?.showDiscordImage;

  const mappedPreviousChallenge = {
    type: previousChallenge.type,
    length: previousChallenge.length,
    title: `Winner ${getFullMonthName(new Date(previousMonthAsDate))}`,
    description: `${previousChallenge.type} ${previousChallenge.length}`,
    ...(previousChallenge.winner && {
      winner: {
        displayName: previousChallenge.winner.displayName,
        username: previousChallenge.winner.username,
        ...(previousChallenge.winner.image && {
          image: previousChallenge.winner.image,
        }),
        wordsPerMinute: previousChallenge.winner.record.wpm,
        accuracy: Math.floor(previousChallenge.winner.record.accuracy),
        date: getFormattedRecordDate(previousChallenge.winner.record.timestamp),
        showDiscordImage: showDiscordImage || false,
      },
    }),
  };

  const mappedCurrentChallenge = {
    type: currentChallenge.type,
    length: currentChallenge.length,
    title: `${currentChallenge.type} ${currentChallenge.length}`,
    description: `${getFullMonthName(currentDate)} challenge`,
  };

  const mappedNextChallenge = {
    type: nextChallenge.type,
    length: nextChallenge.length,
    title: 'Coming up',
    description: `${nextChallenge?.type} ${nextChallenge?.length}`,
  };

  return {
    previousChallenge: mappedPreviousChallenge,
    currentChallenge: mappedCurrentChallenge,
    nextChallenge: mappedNextChallenge,
  };
}
