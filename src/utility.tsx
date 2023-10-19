import { StyledFormItem, StyledSimpleSelect } from './Component/Form/Form';
import { CustomNode } from './Types/Types';

export const getAgeFromDate = (date: Date | string): number => {
  const today = new Date();
  const birthDate = new Date(date);

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  const dayDiff = today.getDate() - birthDate.getDate();

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age -= 1;
  }
  return age;
};

export const getBase64 = (file?: File) => {
  if (!file) return '';
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = function (event) {
      if (!event?.target?.result) return;
      const result = event?.target?.result as string;
      const base64String = result.split(',')?.[1];
      resolve(base64String);
      console.log('getBase64 -> base64String', base64String);
    };

    reader.onerror = function (error) {
      reject(error);
    };

    reader.readAsDataURL(file);
  });
};

export const dataOrDash = (data: string | number | null | undefined) => {
  return data || '-';
};

export const ConstructUrlFromQueryParams = (queryParams: any) => {
  if (Object.keys(queryParams).length) {
    const url = `?${Object.keys(queryParams)
      ?.map((key) => {
        if (!queryParams[key]) return '';
        return `${key}=${queryParams[key]}`;
      })
      .filter((e) => e)
      .join('&')}`;
    return url;
  }
  return '';
};

export const toPascalCase = (inputString: string) => {
  const words = inputString.split(/\s+/);
  const pascalCaseWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  );
  return pascalCaseWords.join('');
};

export const dateFormat = 'dd/MM/yyyy';

export const combineDateAndTime = (
  date: string | null | undefined,
  time: string
): Date => {
  if (!date) return new Date();
  try {
    const [hours, minutes] = time?.split(':')?.map(Number);
    const combinedDate = new Date(date);

    combinedDate.setHours(hours);
    combinedDate.setMinutes(minutes);

    return combinedDate;
  } catch (err) {
    console.log('combineDateAndTime -> err', err);
    return new Date();
  }
};

export const getMinutesDifference = (
  startDateTime: string,
  endDateTime: string
): number => {
  try {
    const startDate = new Date(startDateTime);
    const endDate = new Date(endDateTime);

    const differenceInMilliseconds = endDate.getTime() - startDate.getTime();
    const differenceInMinutes = Math.floor(
      differenceInMilliseconds / (1000 * 60)
    );

    return differenceInMinutes;
  } catch (err) {
    console.log('err', err);
    return 0;
  }
};

export const colorCodes = {
  Unconfirmed: '#FFB800',
  Confirmed: '#0CB208',
  'Checked-In': '#23408E',
  'Checked Out': '#22A2BF',
  Rescheduled: '#972587',
  Canceled: '#FC0303',
  'No-Show': '#000000',
};

export const getTime = (): string => {
  const currentDate = new Date();
  const hours = currentDate.getHours().toString().padStart(2, '0');
  const minutes = currentDate.getMinutes().toString().padStart(2, '0');
  const seconds = currentDate.getSeconds().toString().padStart(2, '0');

  return `${hours}:${minutes}:${seconds}`;
};

export const parseJSON = (node?: CustomNode[]): DocumentFragment | null => {
  if (!node) return null;
  const generateChild = (tag: string, elem: CustomNode) => {
    let child: HTMLElement | null = null;
    if (tag) {
      child = document.createElement(tag);
      Object.keys(elem.attributes)?.forEach((e) => {
        if (child) {
          if (e === 'innerHTML') {
            child.innerHTML = elem.attributes.innerHTML;
          } else if (e === 'value') {
            child.innerHTML = elem.attributes.value;
          } else {
            child.setAttribute(e, elem.attributes[e]);
          }
        }
      });
      if (elem.value && !elem.tag) child.innerHTML = elem.value;
    }
    return child;
  };
  const root = document.createDocumentFragment();
  node?.forEach((elem: CustomNode) => {
    let child: HTMLElement | null = null;
    if (elem.tag) child = generateChild(elem.tag, elem);
    else if (elem.value && elem.type === 'text')
      child = generateChild('span', elem);

    if (elem?.childrens) {
      const temp = parseJSON(elem.childrens);
      if (temp) child?.appendChild(temp);
    }
    if (child) root.appendChild(child);
  });
  return root;
};

export const getCursorPosition = (
  container: HTMLElement
): { start: number; end: number } => {
  const data = sessionStorage.getItem('editable-container-cursor');
  console.log('data', data);
  if (data) {
    const payload = JSON.parse(data);
    console.log('payload', payload);
    if (Object.keys(payload)?.length) {
      return payload;
    }
  }
  const selection = window.getSelection();
  if (selection) {
    const range = selection.getRangeAt(0);
    const preSelectionRange = range.cloneRange();
    preSelectionRange.selectNodeContents(container);
    preSelectionRange.setEnd(range.startContainer, range.startOffset);
    const start = preSelectionRange.toString().length;
    const end = start + selection.toString().length;
    return { start, end };
  }

  return { start: 0, end: 0 };
};

export const insertElement = (
  nodeStructure: CustomNode[],
  containerId: string
) => {
  const selection = window.getSelection();
  const container = document.getElementById(containerId);
  if (container && selection) {
    const range = selection.getRangeAt(0);
    const newElement = parseJSON(nodeStructure);
    range.deleteContents();
    // range.insertNode(newElement);
    // const { childNodes } = container;
    // const { start, end } = getCursorPosition(container);
    // // console.log('start', start);
    // const referenceNode = childNodes[start];
    // if (newElement) container.insertBefore(newElement, referenceNode);
    // selection.removeAllRanges();
    // selection.addRange(range);
    sessionStorage.setItem('HTMLElement', JSON.stringify(nodeStructure));
  }
};

export const BuildUIFromJSON = (tagName: string, attribute?: any) => {
  switch (tagName) {
    case 'DropDown': {
      return (
        <StyledFormItem
          className="add-vaccine-labels"
          name={attribute?.name}
          label={attribute?.name}
        >
          <StyledSimpleSelect
            className="add-vaccine-input-box"
            {...attribute}
          />
        </StyledFormItem>
      );
    }
    default: {
      return <p />;
    }
  }
};

export const parseHTML = (id: string) => {
  const rootElement = document.getElementById(id);
  console.log('parseHTML -> rootElement', rootElement);

  const parseNode = (node: HTMLElement) => {
    const customNode: CustomNode = {
      key: node.id || '',
      tag: node.tagName?.toLowerCase(),
      attributes: {},
      type: node.nodeType === Node.TEXT_NODE ? 'text' : 'tag',
      childrens: [],
      value:
        node.nodeType === Node.TEXT_NODE ? node?.nodeValue?.trim() : undefined,
    };

    // Parse attributes
    if (node.attributes) {
      // eslint-disable-next-line no-restricted-syntax
      for (const attr of node.attributes) {
        customNode.attributes[attr.name as keyof typeof customNode.attributes] =
          attr.value;
      }
    }

    // // Parse child nodes
    if (node?.childNodes?.length) {
      // // eslint-disable-next-line no-restricted-syntax
      for (const childNode of node.childNodes) {
        if (
          childNode.nodeType === Node.ELEMENT_NODE ||
          childNode.nodeType === Node.TEXT_NODE
        ) {
          const temp = parseNode(childNode as HTMLElement);
          if (temp) customNode.childrens.push(temp);
        }
      }
    }
    return customNode;
  };
  if (rootElement) return parseNode(rootElement);
  return null;
};

// export const;

// const event = new Event('build');

// // Listen for the event.
// elem.addEventListener(
//   'build',
//   (e) => {
//     /* … */
//   },
//   false
// );

// // Dispatch the event.
// elem.dispatchEvent(event);

// const SetHTMLContent = () => {
//   return
// }
