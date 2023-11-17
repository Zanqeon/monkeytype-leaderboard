import { REGISTERED_USERS } from '@app/content';
import { ChallengesData, UserData } from '@app/types/firebase';

export function mapCurrentChallengeLeaderboard(
  users: UserData[],
  challenges: ChallengesData
) {
  const currentDate = new Date();
  const currentYear = currentDate.getUTCFullYear();

  if (!users || !challenges[currentYear]) return [];

  const currentMonth = currentDate.getUTCMonth() + 1;
  const currentChallenge =
    challenges[currentYear.toString()][currentMonth.toString()];

  // Check only for the users that are in the REGISTERED_USERS AND in the database
  const activeUsers = users.filter((user) =>
    REGISTERED_USERS.map((user) => user.username).includes(user.username)
  );

  // Check if active users have a score on the current challenge of the month (check if the current challenge object has any keys)
  const activeUsersCurrentChallenge = activeUsers.filter((user) => {
    const userHasScoreForCurrentChallenge =
      user.records?.[currentYear.toString()]?.[currentMonth.toString()]?.[
        currentChallenge.type
      ]?.[currentChallenge.length];

    if (userHasScoreForCurrentChallenge) {
      return user;
    }
  });

  const currentChallengeLeaderboard = activeUsersCurrentChallenge
    .map((user) => {
      const currentRecord =
        user.records[currentYear.toString()][currentMonth.toString()][
          currentChallenge.type
        ][currentChallenge.length];

      return {
        username: user.username,
        displayName: user.displayName,
        wordsPerMinute: Math.floor(currentRecord.wpm) || 0,
        accuracy: Math.floor(currentRecord.accuracy) || 0,
        timestamp: currentRecord.timestamp || 0,
      };
    })
    //Sort the list of users that have a score on this month's challenge, first by WPM, then by accuracy, and as a last tiebreaker the timestamp
    .sort((a, b) => {
      return (
        b.wordsPerMinute - a.wordsPerMinute ||
        b.accuracy - a.accuracy ||
        b.timestamp - a.timestamp
      );
    });

  return currentChallengeLeaderboard;
}
