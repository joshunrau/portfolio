const HELP_TEXT = ['The following commands are available:\r\n', 'cd', 'pwd', 'echo', 'ls', 'whoami', 'help'];

let cwd = '/root';

export function cd(...args: string[]) {
  const target = args[0];
  if (!target) {
    return '';
  }
  return `cd: ${target}: No such file or directory`;
}

export function pwd() {
  return cwd;
}

export function echo(...args: string[]) {
  return args.join(' ');
}

export function ls() {
  return '';
}

export function whoami() {
  return 'root';
}

export function help() {
  return HELP_TEXT.join(' ');
}
