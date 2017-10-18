import React from 'react';
import { connect } from 'react-redux';
import { startSetSecretarias } from '../actions/actions';

export class SecretariaPage extends React.Component {
  render() {
    return (
      <div className="container">
        <section className="hero">
          <div class="hero-body">
            <div class="has-text-centered">
              <h1 class="title">
                {this.props.secretaria.id}
              </h1>
              <hr />
              <h2 class="subtitle">
                Objetivo General:
              </h2>
              <p>{this.props.secretaria.objetivoG}</p>
              <h2 class="subtitle">
                Objetivos Particulares:
              </h2>
              <ol>
                {this.props.secretaria.objetivosP.objetivoUno && <li>{this.props.secretaria.objetivosP.objetivoUno}</li>}
                {this.props.secretaria.objetivosP.objetivoDos && <li>{this.props.secretaria.objetivosP.objetivoDos}</li>}
                {this.props.secretaria.objetivosP.objetivoTres && <li>{this.props.secretaria.objetivosP.objetivoTres}</li>}
                {this.props.secretaria.objetivosP.objetivoCuatro && <li>{this.props.secretaria.objetivosP.objetivoCuatro}</li>}
                {this.props.secretaria.objetivosP.objetivoCinco && <li>{this.props.secretaria.objetivosP.objetivoCinco}</li>}
                {this.props.secretaria.objetivosP.objetivoSeis && <li>{this.props.secretaria.objetivosP.objetivoSeis}</li>}
                {this.props.secretaria.objetivosP.objetivoSiete && <li>{this.props.secretaria.objetivosP.objetivoSiete}</li>}
              </ol>
            </div>
          </div>
        </section>
      </div>
    );
  }
};

const mapStateToProps = (state, props) => {
  return {
    secretaria: state.items.find((secretaria) => secretaria.id === props.match.params.id)
  }
}

export default connect(mapStateToProps)(SecretariaPage);
