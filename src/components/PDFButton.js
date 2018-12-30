import React from 'react';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

class PDFButton extends React.Component {
  render() {
    return <button>PDF button</button>
  }
}

export default PDFButton
