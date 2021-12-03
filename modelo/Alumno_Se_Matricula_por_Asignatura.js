import React from "react";
import { Alert, StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";

export default class Persona extends React.Component
// antes del render van las funciones
{
  constructor(props)
  {
    super(props)
    // Ahora definimos las variables para la tabla persona de la base de datos MatriculasGrupoSabado
    this.state =
    {
    TextInput_id_alumno:'',
    TextInput_id_asignatura:'',
    TextInput_id_curso_escolar: ''
    }
  }
  //Ahora creamos las funciones de esta clase
  insertarMatricula = () =>
  {

    // Ahora vamos a consumir la API: APIMatriculasGrupoSabado
    fetch ('http://192.168.0.17/APImatriculasGrupoSabado/modelo/insertarPersona.php',
    {
      method:'POST',
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        {
          id_alumno: this.state.TextInput_id_alumno,
          id_asignatura: this.state.TextInput_id_asignatura,
          id_curso_escolar: this.state.TextInput_id_curso_escolar   
        }
      )  
    }
    ).then((response) => response.json())
      .then((responsejson) => 
      {
        alert(response.Json);

      }).catch((error) => 
      {
        console.error(error);
      }
      ); 
  }

  actualizarMatricula = () =>
  {
  // Ahora vamos a codificar la funcion ACTUALIZAR para consumir la API
  fetch ('http://172.18.67.17/APImatriculasGrupoSabado/modelo/actualizarPersona.php',
    {
      method: 'PUT',
      headers:
      {
        'Accept': 'application/json',
        'content-type': 'application/json'
      },
      body: JSON.stringify(
        {
          id_alumno: this.state.TextInput_id_alumno,
          id_asignatura: this.state.TextInput_id_asignatura,
          id_curso_escolar: this.state.TextInput_id_curso_escolar
        }
      )
    }
  ).then((response) => response.json())
    .then((responsejson) => 
    {
      alert('Actualizado');
    }
    ).catch((error) => 
    {
      console.error(error);
    }
    )
  }
  borrarPersona = () =>
  {
    fetch ('http://192.168.0.17/APImatriculasGrupoSabado/modelo/borrarPersona.php',
    {
      method: 'DELETE',
      headers:
      {
        'Accept': 'application/json',
        'content-type': 'application/json'
      },
      body: JSON.stringify(
        {
          id: this.state.TextInput_id
        }
      )
    }
      ).then((response) => response.json())
      .then((responsejson) => 
      {
        alert('Actualizado');
      }
      ).catch((error) => 
      {
        console.error(error);
      }
      )
    }

  listarPersonaxId = () =>
  {
    fetch ('http://192.168.0.17/APImatriculasGrupoSabado/modelo/listarPersonaxId.php',
    {
      method: 'GET',
      headers:
      {
        'Accept': 'application/json',
        'content-type': 'application/json'
      },
      body: JSON.stringify(
        {
          id: this.state.TextInput_id,
          nif: this.state.TextInput_nif,
          nombre: this.state.TextInput_nombre,
          Apellido1: this.state.TextInput_Apellido1,
          Apellido2: this.state.TextInput_Apellido2,
          ciudad: this.state.TextInput_ciudad,
          clave: this.state.TextInput_clave,
          direccion: this.state.TextInput_direccion,
          telefono: this.state.TextInput_telefono,
          fecha_nacimiento: this.state.TextInput_fecha_nacimiento,
          sexo: this.state.TextInput_sexo,
          tipo: this.state.TextInput_tipo
        }
      )
    }
      ).then((response) => response.json())
        .then((responsejson)=> 
        {
          this.state(
          {
          TextInput_nif: responsejson[0]['nif'],
          TextInput_nombre: responsejson[0]['nombre'],
          TextInput_Apellido1: responsejson[0]['Apellido1'],
          TextInput_Apellido2: responsejson[0]['Apellido2'],
          TextInput_ciudad: responsejson[0]['ciudad'],
          TextInput_clave: responsejson[0]['clave'],
          TextInput_direccion: responsejson[0]['direccion'],
          TextInput_telefono: responsejson[0]['telefono'],
          TextInput_fecha_nacimiento: responsejson[0]['fecha_nacimiento'],
          TextInput_sexo: responsejson[0]['sexo'],
          TextInput_tipo: responsejson[0]['tipo']
          })
          
        })
  }

  listarTodaslasPersonas = () =>
  {
    fetch ('http://172.18.67.17/APImatriculasGrupoSabado/modelo/ListarTodaslasPersonas.php',
    {
      method: 'GET',
      headers:
      {
        'Accept': 'application/json',
        'content-type': 'application/json'
      },
      body: JSON.stringify(
        {
          id: this.state.TextInput_id,
          nif: this.state.TextInput_nif,
          nombre: this.state.TextInput_nombre,
          apellido1: this.state.TextInput_Apellido1,
          apellido2: this.state.TextInput_Apellido2,
          ciudad: this.state.TextInput_ciudad,
          clave: this.state.TextInput_clave,
          direccion: this.state.TextInput_direccion,
          telefono: this.state.TextInput_telefono,
          fecha_nacimiento: this.state.TextInput_fecha_nacimiento,
          sexo: this.state.TextInput_sexo,
          tipo: this.state.TextInput_tipo
        }
      )
    }
      ).then((response) => response.json())
        .then((responsejson)=> 
        {
          this.state(
          {
          
          TextInput_nif: responsejson[0]['nif'],
          TextInput_nombre: responsejson[0]['nombre'],
          TextInput_apellido1: responsejson[0]['Apellido1'],
          TextInput_apellido2: responsejson[0]['Apellido2'],
          TextInput_ciudad: responsejson[0]['ciudad'],
          TextInput_clave: responsejson[0]['clave'],
          TextInput_direccion: responsejson[0]['direccion'],
          TextInput_telefono: responsejson[0]['telefono'],
          TextInput_fecha_nacimiento: responsejson[0]['fecha_nacimiento'],
          TextInput_sexo: responsejson[0]['sexo'],
          TextInput_tipo: responsejson[0]['tipo']
          })
          
        })

  }


render()
  {
    return(
      <View style={MisEstilos.MainContainer}>
       <View>
        <Text style= {{fontSize: 20, textAlign: 'center', fontWeight: 'bold'}}>Registo de Personal</Text>
          <TextInput placeholder="Ingrese ID personal"
          onChangeText = {TextInputValue => this.setState
          ({
            TextInput_id: TextInputValue
          })}
          underlineColorAndroid= 'transparent'
          style={MisEstilos.TextInputStyleClass}
          value= {this.state.TextInput_id}
          >
          </TextInput>
        </View>
        <TextInput
        placeholder="Ingrese el nif"
        onChangeText = {TextInputValue =>  this.setState
        ({
          TextInput_nif: TextInputValue
        })}
        underlineColorAndroid='transparent'
        style={MisEstilos.TextInputStyleClass}
        value={this.state.TextInput_nif}
        autoFocus={true}
        >
        </TextInput>
        <TextInput
        placeholder="Ingrese el Nombre Completo"
        onChangeText = {TextInputValue =>  this.setState
        ({
          TextInput_nombre: TextInputValue
        })}
        underlineColorAndroid='transparent'
        style={MisEstilos.TextInputStyleClass}
        value={this.state.TextInput_nombre}
        >
        
        </TextInput>
        <TextInput
        placeholder="Ingrese el primer Apellido"
        onChangeText = {TextInputValue =>  this.setState
        ({
          TextInput_Apellido1: TextInputValue
        })}
        underlineColorAndroid='transparent'
        style={MisEstilos.TextInputStyleClass}
        value={this.state.TextInput_apellido1}
        >
        </TextInput>
        <TextInput
        placeholder="Ingrese el Segundo Apellido"
        onChangeText = {TextInputValue =>  this.setState
        ({
          TextInput_Apellido2: TextInputValue
        })}
        underlineColorAndroid='transparent'
        style={MisEstilos.TextInputStyleClass}
        value={this.state.TextInput_apellido2}
        >
        </TextInput>
        <TextInput
        placeholder="Ingrese la ciudad de residencia"
        onChangeText = {TextInputValue =>  this.setState
        ({
          TextInput_ciudad: TextInputValue
        })}
        underlineColorAndroid='transparent'
        style={MisEstilos.TextInputStyleClass}
        value={this.state.TextInput_ciudad}
        >
        </TextInput>
        <TextInput
        placeholder="Ingrese su clave"
        onChangeText = {TextInputValue =>  this.setState
        ({
          TextInput_clave: TextInputValue
        })}
        underlineColorAndroid='transparent'
        style={MisEstilos.TextInputStyleClass}
        value={this.state.TextInput_clave}
        >
        </TextInput>
        <TextInput
        placeholder="Ingrese la direccio de residencia"
        onChangeText = {TextInputValue =>  this.setState
        ({
          TextInput_direccion: TextInputValue
        })}
        underlineColorAndroid='transparent'
        style={MisEstilos.TextInputStyleClass}
        value={this.state.TextInput_direccion}
        >
        </TextInput>
        <TextInput
        placeholder="Ingrese el telefono"
        onChangeText = {TextInputValue =>  this.setState
        ({
          TextInput_telefono: TextInputValue
        })}
        underlineColorAndroid='transparent'
        style={MisEstilos.TextInputStyleClass}
        value={this.state.TextInput_telefono}
        >
        </TextInput>
        <TextInput
        placeholder="Ingrese la fecha de nacimiento"
        onChangeText = {TextInputValue =>  this.setState
        ({
          TextInput_fecha_nacimiento: TextInputValue
        })}
        underlineColorAndroid='transparent'
        style={MisEstilos.TextInputStyleClass}
        value={this.state.TextInput_fecha_nacimiento}
        >
        </TextInput>
        <TextInput
        placeholder="Ingrese el sexo de la persona"
        onChangeText = {TextInputValue =>  this.setState
        ({
          TextInput_sexo: TextInputValue
        })}
        underlineColorAndroid='transparent'
        style={MisEstilos.TextInputStyleClass}
        value={this.state.TextInput_sexo}
        >
        </TextInput>
        <TextInput
        placeholder="Ingrese el tipo"
        onChangeText = {TextInputValue =>  this.setState
        ({
          TextInput_tipo: TextInputValue
        })}
        underlineColorAndroid='transparent'
        style={MisEstilos.TextInputStyleClass}
        value={this.state.TextInput_tipo}
        >
        </TextInput>
        <TouchableOpacity
          
          activityOpacity={0.4}
          style={MisEstilos.TouchableOpacityStyleClass}
          onPress={this.insertarPersona}
        >
          <Text style={MisEstilos.TouchableOpacityStyleClass}>Registrar</Text>
        </TouchableOpacity>

      </View>

    );
  }
}

const MisEstilos = StyleSheet.create (
  {
    MainContainer:
    {
      alignItems:'center',
      flex:1,
      padding: 30,
      backgroundColor:'#fff'
    },
    TextInputStyleClass:
    {
      textAlign:'center',
      width:'90%',
      marginBottom:7,
      height: 40,
      borderWidth: 1,
      borderColor:'#FF5722',
      borderRadius: 5,
    },
    TouchableOpacityStyleClass:
    {
      textAlign:"center",
      paddingTop: 10,
      paddingBottom: 10,
      borderRadius: 5,
      marginBottom: 7,
      width: '90%',
      backgroundColor: '#08BCD4',
    },
    TextStyle:
    {
      color: '#FFF',
      textAlign: 'center',
    },
    RowViewCointainer:
    {
      fontSize: 20,
      paddingRight: 10,
      paddingTop: 10,
      paddingLeft: 10,
      paddingBottom: 10,
    }
  }
)