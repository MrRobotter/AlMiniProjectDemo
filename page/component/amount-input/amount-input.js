Page({
  data: {
    value: 200,
  },
  onInputClear() {
    this.setData({
      value:'',
    });
  },
  onInputConfirm(e) {
    console.log(e);
    my.alert({
      content: 'confirmed',
       success: () => {
       this.setData({
       value: '',
    });
  },
    }); 
  },
  onInput(e) {
    console.log(e);
    const { value } = e.detail;
    this.setData({
      value,
    });
  },
  onButtonClick() {
    my.alert({
      content: 'button clicked',
    });
  },
  onInputFocus(e) {
    console.log(e);
  },
  onInputBlur(e) {
    console.log(e);
  },
});
