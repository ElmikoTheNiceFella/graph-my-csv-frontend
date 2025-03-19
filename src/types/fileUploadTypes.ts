export type InputError = "NONE" | "WRONG_FORMAT" | "EMPTY" | "MULTIPLE_FILES"
export type PropType = { handleGeneration: (file:(File|null)) => void }