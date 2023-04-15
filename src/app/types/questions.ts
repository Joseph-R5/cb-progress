import { UpdatedUserDetails } from "./pageProps";

export interface ProgressBarProps {
    progress: number;
    onProgressChange: (nextProgress: number, updatedUserDetails: Partial<UpdatedUserDetails>) => void;
}
  