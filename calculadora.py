mensajeBienvenida = str(input('BIENVENIDO A SISTEMA CALCULADORA :'))
mensajeIndicacion= str(input('A CONTINUACION LAS INDICACIONES PARA USAR LA CALCULADORA: '))
opcion1 = str(input('1: SUMAR'))
opcion2 = str(input('2: RESTAR'))
opcion3 = str(input('3: MULTIPLICAR'))
opcion4 = str(input('4: DIVIDIR'))
final = 'Fin del programa'

opcion = input('ELIGE ENTRE (1-4 opciones):')

#ESTE ES PARA LA SUMA
if opcion == "1":
   numero1 = int(input('Digite el primer numero :'))
   numero2 = int(input('Digite el segundo numero :'))
   resultadoSuma = numero1 + numero2
   print(f'La suma entre {numero1} + {numero2} es : {resultadoSuma}')
#ESTE ES PARA LA RESTA   
elif opcion == "2":
   numero1 = int(input('Digite el primer numero :'))
   numero2 = int(input('Digite el segundo numero :'))
   resultadoResta = numero1 - numero2
   print(f'La resta entre {numero1} - {numero2} es : {resultadoResta}')
#ESTE ES PARA LA MULTIPLICAR   
elif opcion == "3":
   numero1 = int(input('Digite el primer numero :'))
   numero2 = int(input('Digite el segundo numero :'))
   resultadoMultiplicacion = numero1 * numero2
   print(f'La multiplicacion entre {numero1} * {numero2} es : {resultadoMultiplicacion}')
#ESTE ES PARA LA DIVIDIR
elif opcion == "4":
   numero1 = int(input('Digite el primer numero :'))
   numero2 = int(input('Digite el segundo numero :'))
   resultadoDivision = numero1 / numero2
   print(f'La Division entre {numero1} / {numero2} es : {resultadoDivision}')
else:
   print('ESTA OPCION NO ESTA ENTRE LAS OPCIONES')

print(final)

