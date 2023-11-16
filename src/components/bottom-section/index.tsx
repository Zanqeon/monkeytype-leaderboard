import PreviousChallenge, {
  IPreviousChallengeProps,
} from '@app/components/previous-challenge';
import { StyledContainer } from './style';
import TimeRemaining from '@app/components/time-remaining';
import QRCode from '@app/components/qr-code';
import content, { DEFAULT_WINNER } from '@app/content';

export interface IBottomSectionProps {
  previousChallenge: IPreviousChallengeProps;
}

const BottomSection = ({ previousChallenge }: any) => (
  <StyledContainer>
    <PreviousChallenge
      winner={previousChallenge.winner || DEFAULT_WINNER}
      title={previousChallenge.title}
      description={previousChallenge.description}
    />
    <TimeRemaining title="Time remaining" />
    <QRCode {...content.QRCode} />
  </StyledContainer>
);

export default BottomSection;
