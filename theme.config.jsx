import Footer from './components/Footer'

export default {
  logo: <span>TrackCodex Documentation</span>,
  project: {
    link: 'https://github.com/somraj-dev/docs',
  },
  docsRepositoryBase: 'https://github.com/somraj-dev/docs',
  footer: {
    component: <Footer />
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – TrackCodex'
    }
  }
}
