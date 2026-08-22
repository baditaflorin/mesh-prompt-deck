import { createMeshConfig } from "@baditaflorin/mesh-common";

export const config = createMeshConfig({
  appName: "mesh-prompt-deck",
  description: "A shared conversation prompt deck for a group in one room.",
  accentHex: "#315cbd",
  version: __APP_VERSION__,
  commit: __GIT_COMMIT__,
});
