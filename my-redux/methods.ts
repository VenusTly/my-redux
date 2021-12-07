export const methods: any[] = []

export const addMethods = (name: any, handler: any) => {
  methods[name] = handler
}