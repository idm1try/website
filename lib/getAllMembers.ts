import path from 'path';
import fs from 'fs';

export function getAllMembers() {
  const membersRcPath = path.resolve('.all-membersrc.json');
  const { members } = JSON.parse(fs.readFileSync(membersRcPath, 'utf-8'));
  const filters = ['christiannwamba'];
  return members.filter((member: { name: string }) => !filters.includes(member.name));
}

export function getMember(name: string) {
  return getAllMembers().find((member: { name: string }) => member.name === name);
}
