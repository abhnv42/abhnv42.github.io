import type { Resume } from '@recivi/schema'
import data from '@/stores/resume-data.json'

import type { Cert, Institute, Epic, Org, Project, Role } from '@/models/recivi'

// there must be a better way than this stringigy and parse
export const recivi: Resume = JSON.parse(JSON.stringify(data)) as Resume;

export const institutes: Institute[] =
  recivi.education?.map((rcvInstitute) => {
    const institute: Institute = {
      ...rcvInstitute,
      certs: [] as Cert[],
    }
    institute.certs =
      rcvInstitute.certs?.map((cert) => ({ ...cert, institute })) ?? []
    return institute
  }) ?? []

export const certs: Cert[] = institutes.flatMap(
  (institute: Institute) => institute.certs
)

export const epics: Epic[] =
  recivi.creations?.map((rcvEpic) => {
    const epic: Epic = {
      ...rcvEpic,
      role: null,
      projects: [] as Project[],
    }
    epic.projects =
      rcvEpic.projects?.map((project) => ({ ...project, epic })) ?? []
    return epic
  }) ?? []

export const projects: Project[] = epics.flatMap((epic: Epic) => epic.projects)

export const orgs: Org[] =
  recivi.work?.map((rcvOrg) => {
    const org: Org = {
      ...rcvOrg,
      roles: [] as Role[],
    }
    org.roles = rcvOrg.roles?.map((role) => ({ ...role, org, epics: [] })) ?? []
    return org
  }) ?? []

export const roles: Role[] = orgs.flatMap((org: Org) => org.roles)

// Link roles and epics

roles.forEach((role) => {
  epics.forEach((epic) => {
    if (epic.id && role.epicIds?.includes(epic.id)) {
      epic.role = role
      role.epics.push(epic)
    }
  })
})
