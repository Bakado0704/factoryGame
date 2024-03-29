export interface UserIcons {
  id: string;
  icon: UserIconType;
}

export const UserIconType = {
  man1: "man1",
  man2: "man2",
  man3: "man3",
  man4: "man4",
  man5: "man5",
  man6: "man6",
  man7: "man7",
  man8: "man8",
  man9: "man9",
  man10: "man10",
  woman1: "woman1",
  woman2: "woman2",
  woman3: "woman3",
  woman4: "woman4",
  woman5: "woman5",
  woman6: "woman6",
  woman7: "woman7",
  woman8: "woman8",
  woman9: "woman9",
  woman10: "woman10",
} as const;
export type UserIconType = typeof UserIconType[keyof typeof UserIconType];