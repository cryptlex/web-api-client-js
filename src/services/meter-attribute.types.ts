/** Schema for Meter Attributes */
export type MeterAttributeResponse = {
  /** Unique identifier */
  id: string
  /** Creation date */
  createdAt: string
  /** Date of last update */
  updatedAt: string
  /** Name of the attribute */
  name: string
  /** Allowed uses */
  allowedUses: number
  /** Number of times the attribute has been used. */
  totalUses: number
  /** Number of times the attribute has been used since the last reset */
  grossUses: number
  /** Set true to make the meter attribute floating. */
  floating: boolean
  /** Set true to make the meter attribute visible to the user. */
  visible: boolean
}

/** Schema for creating meter attribute property */
export type MeterAttributesRequest = Omit<MeterAttributeResponse, 'id' | 'createdAt' | 'updatedAt' | 'grossUses' | 'totalUses' | 'floating' | 'visible'> & {
  /** Set true to make the meter attribute floating. */
  floating?: boolean
  /** Set true to make the meter attribute visible to the user. */
  visible?: boolean
}
