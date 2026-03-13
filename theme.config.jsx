export default {
  logo: <span>TrackCodex Documentation</span>,
  project: {
    link: 'https://github.com/somraj-dev/docs',
  },
  docsRepositoryBase: 'https://github.com/somraj-dev/docs',
  footer: {
    text: (
      <span>
        {new Date().getFullYear()} ©{' '}
        <a href="https://trackcodex.com" target="_blank">
          TrackCodex
        </a>
        .
      </span>
    )
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – TrackCodex'
    }
  }
}
