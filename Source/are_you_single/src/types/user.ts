// src/types/user.ts

import { Profile } from "@/src/types/Profile";
import { Detail } from "./detail";
import { Location } from "@/src/types/Location";

export interface User {
  _id?: string;
  email: string;
  password: string;
  phone: string;
  status: boolean;
  profile: Profile;
  location: Location;
  detail: Detail;
}
