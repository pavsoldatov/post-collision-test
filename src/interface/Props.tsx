import { ReactNode } from "react";
import { SxProps } from "@mui/system";

export interface AppProps {
  children?: ReactNode;
  sx?: SxProps;
  title?: string;
  details?: string;
  subheader?: string;
  posts?: PostItem[];
  id?: string;
  onDelete?: (id: string) => void;
  onClick?: (e?: React.MouseEvent<HTMLElement>) => void
}

/* Post-related interfaces for /HASH db resource */
export interface Content {
  title: string;
  date: string;
  body: string;
}

export interface CollisionData {
  collisionSource: string;
  contentIndex: number;
}

export interface PostItem {
  collisionData: CollisionData;
  content: Content | Content[];
  id: string;
  hasCollision?: boolean;
}
/* ============================================== */
