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
