// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `
hi, i'm anticode!

I like rust.
Very much. 
Rust is the best ^^

to read my short essays - type 'musings'
to see mu public github - type 'code'

all available commands are:
\n${c}\n
`;
};

export const code = async (args: string[]): Promise<string> => {
  const url = `https://github.com/${config.social.github}/`;

  return ` <a href="${url}" target="_blank">${url}</a>`;
};
export const emacs = async (args: string[]): Promise<string> => {
  const url = `https://github.com/anticode-dev/emacs`;

  return ` <a href="${url}" target="_blank">${url}</a>`;
};


export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const musings = async (args?: string[]): Promise<string> => {
  return `yea now how do I view publish it here hmmm`;
};
