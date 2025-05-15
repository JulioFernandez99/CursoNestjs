En una aplicacion puedo tener varios modulos

# Modulos
Un modulo puede estar compuesto por:
- controller: funciones que se van a ejecutar cuando una url es visitada
- service: funciones que se pueden reutilizar
- dto (data transfer object)

Los modulos se agregan en imports en el modulo principal

Como crear un modulo
```bash
nest g --help
nest g mo projects
```

```bash

```

# Controladores
Funciones que se ejecutan cuando una url es visitada

Se crea con el comando
```bash
nest g --help

nest g co hello

#sino quiero archivo de testing 
nest g co auth --no-spec
```

# Services
Logica que se reutiliza

Comando para generar
```bash
nest g s users
```