//Define Media Queries for responsive design

const size = {
    XS: '320px',
    S: '720px',
    M: '1040px',
    L: '1280px',
    XL: '1440px',
  };
  
  type Device = {
    XS: string;
    S: string;
    M: string;
    L: string;
    XL: string;
  };
  
  const StyledMediaQuery: Device = {
    XS: `(min-width: ${size.XS})`,
    S: `(min-width: ${size.S})`,
    M: `(min-width: ${size.M})`,
    L: `(min-width: ${size.L})`,
    XL: `(min-width: ${size.XL})`,
  };

  export default StyledMediaQuery;