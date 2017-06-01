export const checkmarkFilter = {
  name: 'checkmark',
  filter: () => ( input: string ) => {
    return input ? 'yes' : 'no';
  }
};
