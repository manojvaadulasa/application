export interface fullStack{
  _id: string | undefined,
  name: string | undefined,
  gender: string | undefined,
  address: string | undefined,
  createdAt: string | undefined,
  updatedAt: string | undefined,
  __v: number | undefined
}

export interface importedData{
  checker:boolean,
  message: fullStack | null
}

export interface postData{
  name: string ,
  gender: string ,
  address: string
}
