import React, { Component } from 'react';


class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      formValues: {

      },
      displayFormNr: 0
    }

    this.handleInput = this.handleInput.bind(this)
    this.switchForms = this.switchForms.bind(this)
  }

  formData = {
    anbieter: [
      'T-Immobile',
      'Fodafon',
      'H2O',
      '0&0',
      'Crashed',
      'GMNiX'
    ],
    datenvolumen: [
      {
        name: 'ab 250 MB',
        preis: 0.99
      },
      {
        name: 'ab 500 MB',
        preis: 1.49
      },
      {
        name: 'ab 1 GB',
        preis: 1.99
      },
      {
        name: 'ab 2 GB',
        preis: 2.99
      },
      {
        name: 'ab 3 GB',
        preis: 5.99
      },
      {
        name: 'ab 5 GB',
        preis: 7.99
      },
      {
        name: 'ab 10 GB',
        preis: 12.99
      },
      {
        name: 'ab 15 GB',
        preis: 15.99
      },
      {
        name: 'unbegrenzt',
        preis: 19.99
      }
    ],
    minuten: [
      {
        name: 'ab 100 Minuten',
        preis: 0.99
      },
      {
        name: 'ab 200 Minuten',
        preis: 1.99
      },
      {
        name: 'ab 300 Minuten',
        preis: 3.99
      },
      {
        name: 'Telefon-Flat',
        preis: 7.99
      }
    ],
    handys: {
      hersteller: [
        'Apple', 'Samsung', 'Sony', 'Nokia'
      ],
      modelle: [
        {
          name: '0815/1',
          preis: 99.99
        },
        {
          name: '0815/2',
          preis: 299.99
        },
        {
          name: '0815/3',
          preis: 499.99
        },
        {
          name: '0815/4',
          preis: 699.99
        },
        {
          name: '0815/5',
          preis: 899.99
        }
      ]
    }
  }

  handleInput(event) {
    this.setState({
      formValues: {
        ...this.state.formValues,
        [event.target.name]: event.target.value
      }
    }, () => console.log(this.state.formValues[event.target.name]))
  }

  switchForms(direction) {
    let tempState = this.state.displayFormNr + direction
    this.setState({ displayFormNr: tempState }, console.log(this.state.displayFormNr))
  }

  render() {
    return (
      <form>
        {(this.state.displayFormNr === 0) ? (
          <div>
            <h2>Persönliche Daten</h2>
            <label>Vorname</label>
            <input required type="text" name="vorname" onChange={this.handleInput} value={this.state.formValues.vorname} />
            <label>Nachname</label>
            <input required type="text" name="nachname" onChange={this.handleInput} value={this.state.formValues.nachname} />
            <label>E-Mail</label>
            <input required type="email" name="email" onChange={this.handleInput} value={this.state.formValues.email} />
            <div>
              <button type="button" onClick={() => this.switchForms(1)} disabled=
              {
                !(this.state.formValues.vorname && this.state.formValues.nachname && this.state.formValues.email)
              }>
              Weiter</button >
            </div>
          </div>) : ""}
        {(this.state.displayFormNr === 1) ? (
          <div>
            <h2>Anbieter</h2>
            <select required name="anbieter" onChange={this.handleInput} value={this.state.formValues.anbieter}>
              <option value="-1">Bitte Anbieter wählen</option>
              {this.formData.anbieter.map((ele, index) => <option value={index}>{ele}</option>)}
            </select>
            <div>
              <button type="button" onClick={() => this.switchForms(-1)}>Zurück</button>&nbsp;
            <button type="button" onClick={() => this.switchForms(1)} disabled=
            {
              !this.state.formValues.anbieter
            }>
            Weiter</button>
            </div>
          </div>) : ""}
        {(this.state.displayFormNr === 2) ? (
          <div>
            <h2>Datenvolumen</h2>
            <select required name="volumen" onChange={this.handleInput} value={this.state.formValues.volumen}>
              <option value="-1">Bitte Datenvolumen wählen</option>
              {this.formData.datenvolumen.map((ele, index) => <option value={index}>{ele.name + ", " + ele.preis + " €"}</option>)}
            </select>
            <div>
              <button type="button" onClick={() => this.switchForms(-1)}>Zurück</button>&nbsp;
            <button type="button" onClick={() => this.switchForms(1)} disabled={!this.state.formValues.volumen}>Weiter</button>
            </div>
          </div>) : ""}
        {(this.state.displayFormNr === 3) ? (
          <div>
            <h2>Freiminuten</h2>
            <select required name="minuten" onChange={this.handleInput} value={this.state.formValues.minuten}>
              <option value="-1">Bitte Minuten wählen</option>
              {this.formData.minuten.map((ele, index) => <option value={index}>{ele.name + ", " + ele.preis + " €"}</option>)}
            </select>
            <div>
              <button type="button" onClick={() => this.switchForms(-1)}>Zurück</button>&nbsp;
            <button type="button" onClick={() => this.switchForms(1)} disabled={!this.state.formValues.minuten}>Weiter</button>
            </div>
          </div>) : ""}
        {(this.state.displayFormNr === 4) ? (
          <div>
            <h2>Handys</h2>
            <select required name="handycheck" onChange={this.handleInput} value={this.state.formValues.handycheck}>
              <option value="none">Handy mitbestellen?</option>
              <option value="y">Ja</option>
              <option value="n">Nein</option>
            </select>
            {this.state.formValues.handycheck === "y" ? (<>
              <div>
                <h3>Herstellerauswahl</h3>
                <select required name="hersteller" onChange={this.handleInput} value={this.state.formValues.hersteller}>
                  <option value="-1">Bitte Hersteller wählen</option>
                  {this.formData.handys.hersteller.map((ele, index) => <option value={index}>{ele}</option>)}
                </select>
              </div>
              <div>
                <h3>Modellauswahl</h3>
                <select required name="modell" onChange={this.handleInput} value={this.state.formValues.modell}>
                  <option value="-1">Bitte Modell wählen</option>
                  {this.formData.handys.modelle.map((ele, index) => <option value={index}>{ele.name + ", " + ele.preis + " €"}</option>)}
                </select>
              </div> </>) : ""}
            <div>
              <button type="button" onClick={() => this.switchForms(-1)}>Zurück</button>&nbsp;
            <button type="button" onClick={() => this.switchForms(1)} disabled={!(this.state.formValues.handycheck === "n" || (this.state.formValues.modell && this.state.formValues.hersteller))}>Weiter</button>
            </div>
          </div>) : ""}
        {(this.state.displayFormNr === 5) ? (
          <div>
            <h2>Zusammenfassung</h2>
            <h3>Ihre Daten</h3>
            <p>Vorname: {this.state.formValues.vorname}</p>
            <p>Nachname: {this.state.formValues.nachname}</p>
            <p>E-Mail: {this.state.formValues.email}</p>
            <h3>Tarifdaten </h3>
            <p>Anbieter: {this.formData.anbieter[this.state.formValues.anbieter]}</p>
            <p>Datenvolumen: {this.formData.datenvolumen[this.state.formValues.volumen].name+", "+this.formData.datenvolumen[this.state.formValues.volumen].preis+" €"}</p>
            <p>Freiminuten: {this.formData.minuten[this.state.formValues.minuten].name+", "+this.formData.minuten[this.state.formValues.minuten].preis+" €"}</p>
            {(this.state.formValues.handycheck === "y") ? (
            <div>
              <h3>Handy</h3>
              <p>Hersteller: {this.formData.handys.hersteller[this.state.formValues.hersteller]}</p>
              <p>Modell: {this.formData.handys.modelle[this.state.formValues.modell].name+", "+this.formData.handys.modelle[this.state.formValues.modell].preis+" €"}</p>
            </div>) : ""}
            <button type="button" onClick={() => this.switchForms(-1)}>Zurück</button>&nbsp;
            <button type="button">Bestellen</button>
          </div>) : ""}
        {(this.state.displayFormNr === 6) ? (
          <div>
            <h2>Danke für Ihre Bestellung!</h2>
          </div>) : ""}
      </form>
    );
  }
}

export default Main;