// // import { FC } from "react"

// // export type TreeProps = {}
// // export const Tree: FC<TreeProps> = ({}) => {

// // }

// "use client";

// // import { TreeSchema } from "@/web-shared/validation/git";
// // import * as Collapsible from "@radix-ui/react-collapsible";
// // import { ChevronDownIcon, ChevronRightIcon, FileIcon, FolderIcon } from "@radix-ui/react-icons";
// // import { Box, Flex, IconButton, Text } from "@radix-ui/themes";
// // import * as React from "react";

// type TreeProps = {
//   tree: TreeSchema;
// };

// // const getName = (path: string) => path.split("/").pop() ?? path;

// const TreeNodeComponent: React.FC<TreeProps> = ({ tree }) => {
//   if (tree.type === "file") {
//     return (
//       <div className="flex items-center gap-2 py-1 pl-6 text-sm">
//         <File size={14} />
//         {getName(tree.path)}
//       </div>
//     );
//   }

//   return (
//     <Collapsible.Root>
//       <Collapsible.Trigger asChild>
//         <div className="hover:bg-accent/30 flex cursor-pointer items-center gap-2 rounded py-1 pl-4 text-sm">
//           <ChevronRight className="collapsible-closed:block hidden" size={14} />
//           <ChevronDown className="collapsible-open:block hidden" size={14} />
//           <Folder size={14} />
//           {getName(tree.path)}
//         </div>
//       </Collapsible.Trigger>
//       <Collapsible.Content>
//         {tree.children?.map(child => <TreeNodeComponent key={child.path} node={child} />)}
//       </Collapsible.Content>
//     </Collapsible.Root>
//   );
// };

// export const FileTree: React.FC<TreeProps> = ({ nodes }) => {
//   return (
//     <div className="font-mono text-sm">
//       {nodes.map(node => (
//         <TreeNodeComponent key={node.path} node={node} />
//       ))}
//     </div>
//   );
// };
