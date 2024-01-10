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

I like rust, evm and svm.

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


export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `so based`;
};
export const musings = async (args?: string[]): Promise<string> => {
  return `yea now how do I view publish it here hmmm`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  // window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  return `Permission denied: with little power comes... no responsibility? `;
};

// Banner
export const banner = (args?: string[]): string => {
  return;
};
