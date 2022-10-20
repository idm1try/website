import { getMembers } from 'allMembers';

export function getMember(name: string) {
  return getMembers().find((member: { name: string }) => member.name === name);
}
