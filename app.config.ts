export default defineAppConfig({
  url: {
    torch: "http://localhost:10416",
    docs: "http://localhost:10417"
  },
  ui: {
    primary: 'sky',
    gray: 'cool',
    button: {
      rounded: 'rounded-md',
      default: {
        size: 'sm'
      }
    },
    input: {
      rounded: 'rounded-md',
      default: {
        size: 'sm'
      }
    },
    card: {
      rounded: 'rounded-[inherit] overflow-hidden',
      header: {
        base: 'font-bold'
      },
      footer: {
        base: 'bg-gray-50 dark:bg-gray-800 flex justify-end gap-4',
      },
    },
    page: {
      hero: {
        wrapper: 'lg:py-24'
      }
    }
  }
})
