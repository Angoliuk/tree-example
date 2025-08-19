import { TreeSchema } from "@/web-shared/validation/git";
import { Injectable } from "@nestjs/common";
import fs from "node:fs/promises";
import { join } from "node:path";
import { SimpleGit, simpleGit } from "simple-git";

import { PrismaService } from "../prisma";

@Injectable()
export class GitService {
  constructor(private prisma: PrismaService) {}

  //
  async buildFileTree(dirPath: string): Promise<TreeSchema> {
    const entries = await fs.readdir(dirPath, { withFileTypes: true });

    const tree: TreeSchema = [];

    for (const entry of entries) {
      if (entry.isDirectory()) {
        tree.push({
          children: await this.buildFileTree(join(dirPath, entry.name)),
          path: join(dirPath, entry.name),
          type: "directory",
        });
      } else {
        tree.push({
          path: join(dirPath, entry.name),
          type: "file",
        });
      }
    }

    return tree;
  }

  async clone() {
    const git: SimpleGit = simpleGit("./apps/api/projects", { binary: "git" });
    git.clone("https://github.com/yarokon/pair-programming-terminal.git");
  }
}
