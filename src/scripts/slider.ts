import P11 from '@pictures/574ed70e-4b01-4096-9b0b-7d8672bd90ca.png';
import P12 from '@pictures/0e4a9f1e-e518-4b28-a7bc-4f8911fd2022.png';
import P13 from '@pictures/027952ea-e9a8-49e0-bb35-b3b87661fb15.png';
import P14 from '@pictures/269c30ef-e97d-40ad-8f61-1820f0a5e766.png';

import P21 from '@pictures/598af427-2611-4004-b345-3e2cdf861a22.png';
import P22 from '@pictures/28a13607-3163-4742-9e8c-d86c56c6e55d.png';
import P23 from '@pictures/753db765-4103-41e3-997d-67e1f22ec331.png';
import P24 from '@pictures/7851e15f-7c68-475f-8624-f1e1bde7afa0.png';

import P31 from '@pictures/04631002-13e7-4559-935a-1f361e9fc46c.png';
import P32 from '@pictures/9216d1dd-ba0d-4c49-b035-671729a3d8f9.png';
import P33 from '@pictures/6d7910fd-345d-4c43-b8a7-e3cf76409e21.png';
import P34 from '@pictures/3e18a162-e57c-4379-aa50-9aa6055aceec.png';
import P35 from '@pictures/5b987259-718b-41e7-bf47-b9b8724c07c5.png';
import P36 from '@pictures/071d503c-f2df-4d9d-bc65-e48d7847352c.png';
import P37 from '@pictures/1e67d2b6-b011-4cce-bf87-8ce7b7f80d04.png';

export const slider: {
   visible: boolean,
   index: number,
   length: number,
   pictures: ImageMetadata[][],
   handlers: HTMLButtonElement[],
   open: (index: number) => void,
   close: () => void,
   prev: () => void,
   next: () => void,
} = {
   visible: false,
   index: 0,
   length: 0,
   pictures: [
      [P11, P12, P13, P14],
      [P21, P22, P23, P24],
      [P31, P32, P33, P34, P35, P36, P37],
   ],
   handlers: [],
   open: () => {},
   close: () => {},
   prev: () => {},
   next: () => {},
}