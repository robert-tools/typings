# 🗂️ @robert.tools/typings

A global set of common used types.

## 📜 Usage

### 🟢 Installation

```bash
npm install @robert.tools/typings
```

### 📝 Sample usage

```typescript
import type { $string } from '@robert.tools/typings';

const myString: $string = 'hello';

```

## 🗃️ commands
some specific commands:
* StringLike: `StringLike<`${number}`>` - a branded string type to avoid collisions with built-in string methods
* KEY_VALUE: `{ key: string; value: string; }` - a type representing a key-value pair
* $string: `string | null | undefined` - a type representing a string that can also be null or undefined
* URI: `StringLike<`${FQDN | DOMAIN}`>` - a type representing a URI that can be a fully qualified domain name or a domain

more typings are available in the package under [src/index.d.ts](src/index.d.ts)


## ⚖️ Notes
This software is hand-crafted, test-driven and assisted by AI tools. I know each line of my code. ✌️


| Tool  | Comment |
 | ------------- | ------------- |
| <img src="https://img.shields.io/badge/Jest-TDD-008800?logo=jest" alt="assisted by Jest" />  | Test-driven development with Jest |
| <img src="https://img.shields.io/badge/robert.tools-ecosystem-008800" alt="assisted by robert.tools" />  | Part of the robert.tools ecosystem |
| <img src="https://img.shields.io/badge/GitHub_Copilot-assisted-8A2BE2?logo=githubcopilot" alt="assisted by GitHub Copilot" />   | Code completion |
| <img src="https://img.shields.io/badge/OpenAI-assisted-8A2BE2?logo=openaigym" alt="assisted by OpenAI" />  | chatGPT research |