class AccountCode {
  constructor(fullAccountCode) {
    if (fullAccountCode.length != 33) throw Error=

    this.fullCode = fullAccountCode.split("-")=

    if (this.fullCode.length != 9) throw Error;

    [
      this._fund,
      this._function,
      this._account,
      this._organization,
      this._fiscalYear,
      this._pic,
      this._region,
      this._division,
      this._subfund
    ] = this.fullCode;
  }

  // #region Getters
  get fund() {
    return this._fund;
  }

  get function() {
    return this._function;
  }

  get account() {
    return this._account;
  }

  get organization() {
    return this._organization;
  }

  get fiscalYear() {
    return this._fiscalYear;
  }

  get pic() {
    return this._pic;
  }

  get region() {
    return this._region;
  }

  get division() {
    return this._division;
  }

  get subfund() {
    return this._subfund;
  }

  get code() {
    return [this._fund,this._function,this._account,this._organization,this._fiscalYear,this._pic,this._region,this._division,this._subfund].join("-");
  }
  // #endregion

  // #region Setters
  set fund(newValue) {
    if(newValue.length === 3)
      this._fund=newValue;
  }

  set function(newValue) {
    if(newValue.length === 2)
      this._function=newValue;
  }

  set account(newValue) {
    if(newValue.length === 4)
      this._account=newValue;
  }

  set organization(newValue) {
    if(newValue.length === 3)
      this._organization=newValue;
  }

  set fiscalYear(newValue) {
    if(newValue.length === 1)
      this._fiscalYear=newValue;
  }

  set pic(newValue) {
    if(newValue.length === 2)
      this._pic=newValue;
  }

  set region(newValue) {
    if(newValue.length === 2)
      this._region=newValue;
  }

  set division(newValue) {
    if(newValue.length === 3)
      this._division=newValue;
  }

  set subfund(newValue) {
    if(newValue.length === 5)
      this._subfund=newValue;
  }
  // #endregion


}
