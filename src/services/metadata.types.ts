/** Schema for Metadata */
export type MetadataResponse = {
  /** Unique identifier */
  id: string
  /** Creation date */
  createdAt: string
  /** Date of last update */
  updatedAt: string
  /** Key */
  key: string
  /** Value */
  value: string
  /** Set true to access the metadata on activation. */
  visible: boolean
}

/** Schema for creating metadata property */
export type MetadataRequest = Omit<MetadataResponse, 'id' | 'createdAt' | 'updatedAt'>
