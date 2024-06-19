import WindowSlice from "@/lib/types/store/slices/window-slice";
import { SetState } from "@/lib/types/store/store";

export default function createWindowSlice(set: SetState): WindowSlice {
  return {
    windowWidth: 600,
    changeWindowWidth: (newWidth) =>
      set(() => ({
        windowWidth: newWidth,
      })),
  };
}
