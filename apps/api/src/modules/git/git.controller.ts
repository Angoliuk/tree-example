import { formatResponse } from "@/shared/utils";
import { webContract } from "@/web-shared/api";
import { Controller } from "@nestjs/common";
import { TsRest, TsRestHandler, tsRestHandler } from "@ts-rest/nest";

import { GitService } from "./git.service";

@Controller()
@TsRest({ validateResponses: true })
export class GitController {
  constructor(private gitsService: GitService) {}

  @TsRestHandler(webContract.git.loadFiles)
  async loadFiles() {
    return tsRestHandler(webContract.git.loadFiles, async () => {
      await this.gitsService.clone();

      const tree = await this.gitsService.buildFileTree(
        "./apps/api/projects/pair-programming-terminal",
      );

      return formatResponse({ tree });
    });
  }
}
