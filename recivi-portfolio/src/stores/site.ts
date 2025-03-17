/**
 * Configure your portfolio site here.
 */

interface Site {
  /** the final URL where the site is deployed, no trailing slash */
  baseUrl: string
  /** the creator ID that is used for author attribution in the Fediverse */
  fediverse?: string
  /** the title of the website
   *
   * This title is used in the site header, Open Graph images, tab/window title
   * and meta tags.
   */
  title: string

  /**
   * the year in which your were born
   *
   * For privacy reasons, you can offset it a little bit as it's only being used
   * in percentages.
   */
  birthYear: number
  /** the age at which I started writing software as a hobby */
  hobbyAge: number
  /** the age at which I started working as a software developer */
  jobAge: number

  /**
   * whether include a link about Récivi in the footer
   *
   * We'd appreciate it a lot if you keep this enabled to help us spread the
   * word about Récivi.
   */
  showCredit?: boolean
}

// TODO: remove reciviUrl, it's not required because I'm importing data directly from file resume-data.json
export const site: Site = {
  baseUrl: 'https://abhnv42.github.io',
  title: '@abhnv42',
  birthYear: 1993,
  hobbyAge: 15,
  jobAge: 24,
  showCredit: true,
}
