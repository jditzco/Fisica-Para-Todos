USE [master]
GO
/****** Object:  Database [ProyectoFinal]    Script Date: 6/7/2023 21:26:33 ******/
CREATE DATABASE [ProyectoFinal]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'ProyectoFinal', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.SQLEXPRESS\MSSQL\DATA\ProyectoFinal.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'ProyectoFinal_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.SQLEXPRESS\MSSQL\DATA\ProyectoFinal_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [ProyectoFinal] SET COMPATIBILITY_LEVEL = 140
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [ProyectoFinal].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [ProyectoFinal] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [ProyectoFinal] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [ProyectoFinal] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [ProyectoFinal] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [ProyectoFinal] SET ARITHABORT OFF 
GO
ALTER DATABASE [ProyectoFinal] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [ProyectoFinal] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [ProyectoFinal] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [ProyectoFinal] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [ProyectoFinal] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [ProyectoFinal] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [ProyectoFinal] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [ProyectoFinal] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [ProyectoFinal] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [ProyectoFinal] SET  DISABLE_BROKER 
GO
ALTER DATABASE [ProyectoFinal] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [ProyectoFinal] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [ProyectoFinal] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [ProyectoFinal] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [ProyectoFinal] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [ProyectoFinal] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [ProyectoFinal] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [ProyectoFinal] SET RECOVERY FULL 
GO
ALTER DATABASE [ProyectoFinal] SET  MULTI_USER 
GO
ALTER DATABASE [ProyectoFinal] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [ProyectoFinal] SET DB_CHAINING OFF 
GO
ALTER DATABASE [ProyectoFinal] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [ProyectoFinal] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [ProyectoFinal] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [ProyectoFinal] SET QUERY_STORE = OFF
GO
USE [ProyectoFinal]
GO
/****** Object:  Table [dbo].[Ejercicios]    Script Date: 6/7/2023 21:26:33 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Ejercicios](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[titulo] [text] NOT NULL,
	[descripcion] [text] NOT NULL,
	[dificultad] [int] NOT NULL,
 CONSTRAINT [PK_Ejercicios] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Preguntas]    Script Date: 6/7/2023 21:26:33 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Preguntas](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[pregunta] [text] NOT NULL,
	[idEjercicio] [int] NOT NULL,
 CONSTRAINT [PK_Preguntas] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Respuestas]    Script Date: 6/7/2023 21:26:33 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Respuestas](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[idPregunta] [int] NOT NULL,
	[respuesta] [text] NOT NULL,
	[correcta] [bit] NOT NULL,
 CONSTRAINT [PK_Respuestas] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Simuladores]    Script Date: 6/7/2023 21:26:33 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Simuladores](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[titulo] [varchar](50) NOT NULL,
	[descripcion] [text] NOT NULL,
 CONSTRAINT [PK_Simulador] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Usuarios]    Script Date: 6/7/2023 21:26:33 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Usuarios](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [varchar](50) NOT NULL,
	[contraseña] [varchar](50) NOT NULL,
	[maestro] [bit] NOT NULL,
 CONSTRAINT [PK_Usuarios] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Ejercicios] ON 

INSERT [dbo].[Ejercicios] ([id], [titulo], [descripcion], [dificultad]) VALUES (1, N'Tabla periodica', N'Resolvé estos ejercicios acerca de la tabla periódica y sus elementos', 1)
INSERT [dbo].[Ejercicios] ([id], [titulo], [descripcion], [dificultad]) VALUES (2, N'Gravedad', N'Resolvé estos ejercicios sobre gravedad', 2)
INSERT [dbo].[Ejercicios] ([id], [titulo], [descripcion], [dificultad]) VALUES (3, N'Aceleración', N'Resolvé estos ejercicios sobre aceleración', 3)
INSERT [dbo].[Ejercicios] ([id], [titulo], [descripcion], [dificultad]) VALUES (9, N'Movimiento rectilíneo uniformemente variado (MRUV)', N'Resolvé estos ejercicios sobre MRUV', 2)
INSERT [dbo].[Ejercicios] ([id], [titulo], [descripcion], [dificultad]) VALUES (12, N'Tensión', N'Resolvé estos ejercicios sobre tensión', 3)
SET IDENTITY_INSERT [dbo].[Ejercicios] OFF
GO
SET IDENTITY_INSERT [dbo].[Preguntas] ON 

INSERT [dbo].[Preguntas] ([id], [pregunta], [idEjercicio]) VALUES (1, N'Cual es el numero de la tabla periodica para el Nitrógeno?', 1)
INSERT [dbo].[Preguntas] ([id], [pregunta], [idEjercicio]) VALUES (2, N'Cual es el numero de la tabla periodica para el Helio?', 1)
INSERT [dbo].[Preguntas] ([id], [pregunta], [idEjercicio]) VALUES (3, N'Cual es la masa atómica promedio del Oxigeno?', 1)
INSERT [dbo].[Preguntas] ([id], [pregunta], [idEjercicio]) VALUES (4, N'Cual de los siguientes elementos es un no metal?', 1)
INSERT [dbo].[Preguntas] ([id], [pregunta], [idEjercicio]) VALUES (5, N'Cual de los siguientes elementos es un metal?', 1)
INSERT [dbo].[Preguntas] ([id], [pregunta], [idEjercicio]) VALUES (7, N'Cual es la fuerza de Gravedad aplicada a un objeto con masa de 20 kg?
', 2)
INSERT [dbo].[Preguntas] ([id], [pregunta], [idEjercicio]) VALUES (9, N'Cual es el peso de un objeto con una masa de 30 kg?', 2)
INSERT [dbo].[Preguntas] ([id], [pregunta], [idEjercicio]) VALUES (10, N'Si dejamos caer un objeto desde una altura de 25 metros, ¿cuánto tiempo aproximadamente tardará en llegar al suelo?', 2)
INSERT [dbo].[Preguntas] ([id], [pregunta], [idEjercicio]) VALUES (11, N'Cual es la aceleración de la gravedad en la superficie de la Luna?', 2)
INSERT [dbo].[Preguntas] ([id], [pregunta], [idEjercicio]) VALUES (12, N'Si un objeto cae libremente desde un edificio de 50 metros de altura, ¿cuál será su velocidad al tocar el suelo?', 2)
INSERT [dbo].[Preguntas] ([id], [pregunta], [idEjercicio]) VALUES (13, N'Un automóvil acelera a una tasa constante de 4 m/s^2 durante 10 segundos. ¿Cuál será su cambio de velocidad durante este tiempo?', 3)
INSERT [dbo].[Preguntas] ([id], [pregunta], [idEjercicio]) VALUES (14, N'Un objeto se mueve con una aceleración de -2 m/s^2. Si su velocidad inicial es de 10 m/s, ¿cuánto tiempo tomará para detenerse?', 3)
INSERT [dbo].[Preguntas] ([id], [pregunta], [idEjercicio]) VALUES (15, N'Un cohete experimenta una aceleración de 20 m/s^2 durante 8 segundos. Si su velocidad inicial es de 50 m/s, ¿cuál será su velocidad final?', 3)
INSERT [dbo].[Preguntas] ([id], [pregunta], [idEjercicio]) VALUES (17, N'Un ciclista se desplaza con una aceleración de 3 m/s^2. Si su velocidad inicial es de 5 m/s, ¿cuánto tiempo le tomará alcanzar una velocidad de 20 m/s?', 3)
INSERT [dbo].[Preguntas] ([id], [pregunta], [idEjercicio]) VALUES (18, N'Un objeto se mueve con una aceleración de 6 m/s^2 y cambia su velocidad de 12 m/s a 42 m/s en un intervalo de tiempo. ¿Cuánto tiempo transcurrió durante este cambio de velocidad?', 3)
INSERT [dbo].[Preguntas] ([id], [pregunta], [idEjercicio]) VALUES (19, N'Un automóvil acelera a una tasa constante de 4 m/s^2 durante 6 segundos. Si su velocidad inicial es de 10 m/s, ¿cuál será su velocidad final?', 9)
INSERT [dbo].[Preguntas] ([id], [pregunta], [idEjercicio]) VALUES (20, N'Un objeto se desplaza con una aceleración de -2 m/s^2. Si su velocidad inicial es de 8 m/s, ¿cuánto tiempo le tomará detenerse?', 9)
INSERT [dbo].[Preguntas] ([id], [pregunta], [idEjercicio]) VALUES (21, N'Un objeto se mueve con una aceleración de 5 m/s^2. Si su velocidad inicial es de 2 m/s, ¿cuál será su velocidad después de 3 segundos?', 9)
INSERT [dbo].[Preguntas] ([id], [pregunta], [idEjercicio]) VALUES (22, N'Un objeto se desplaza con una aceleración de 6 m/s^2 durante 4 segundos. ¿Cuál será la distancia recorrida durante este tiempo?', 9)
INSERT [dbo].[Preguntas] ([id], [pregunta], [idEjercicio]) VALUES (23, N'Un objeto se mueve con una aceleración de -3 m/s^2. Si su velocidad inicial es de 10 m/s, ¿cuánto tiempo le tomará detenerse y retroceder?', 9)
INSERT [dbo].[Preguntas] ([id], [pregunta], [idEjercicio]) VALUES (25, N'Un objeto de 10 kg cuelga de una cuerda suspendida en reposo. ¿Cuál es la tensión en la cuerda?', 12)
INSERT [dbo].[Preguntas] ([id], [pregunta], [idEjercicio]) VALUES (26, N'Dos objetos de masas 5 kg y 8 kg están conectados por una cuerda tensa y se encuentran en reposo. ¿Cuál es la tensión en la cuerda?', 12)
INSERT [dbo].[Preguntas] ([id], [pregunta], [idEjercicio]) VALUES (27, N'Un objeto de 2 kg se mueve hacia arriba con una aceleración constante de 4 m/s^2 mediante una cuerda tensa. ¿Cuál es la tensión en la cuerda?', 12)
INSERT [dbo].[Preguntas] ([id], [pregunta], [idEjercicio]) VALUES (29, N'Un objeto de 6 kg se encuentra en reposo en una superficie horizontal y está conectado a otro objeto de 3 kg mediante una cuerda. Si se aplica una fuerza horizontal de 20 N al objeto de 6 kg, ¿cuál es la tensión en la cuerda?', 12)
INSERT [dbo].[Preguntas] ([id], [pregunta], [idEjercicio]) VALUES (30, N'Un objeto de 4 kg se desliza hacia abajo por un plano inclinado sin fricción, unido a una cuerda. Si el ángulo del plano inclinado es de 30 grados y la aceleración debida a la gravedad es de 9.8 m/s², ¿cuál es la tensión en la cuerda?', 12)
SET IDENTITY_INSERT [dbo].[Preguntas] OFF
GO
SET IDENTITY_INSERT [dbo].[Respuestas] ON 

INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (1, 1, N'14', 0)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (2, 1, N'7', 1)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (3, 1, N'22', 0)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (4, 1, N'17', 0)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (5, 2, N'16', 0)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (6, 2, N'5', 0)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (7, 2, N'1', 1)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (8, 2, N'20', 0)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (10, 3, N'16', 1)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (11, 3, N'14', 0)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (12, 3, N'9.01', 0)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (13, 3, N'6.94', 0)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (14, 4, N'Manganeso', 0)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (15, 4, N'Calcio', 0)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (16, 4, N'Argón', 1)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (18, 4, N'Sodio', 0)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (19, 5, N'Carbono', 0)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (20, 5, N'Litio', 1)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (21, 5, N'Bromo', 0)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (22, 5, N'Yodo', 0)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (27, 7, N'196 N', 1)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (28, 7, N'202 N', 0)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (29, 7, N'188 N', 0)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (30, 7, N'204 N', 0)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (31, 9, N'306 N', 0)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (33, 9, N'282 N', 0)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (34, 9, N'294 N', 1)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (35, 9, N'285 N', 0)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (36, 10, N'3.19 segundos', 0)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (37, 10, N'2.78 segundos', 0)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (38, 10, N'2.26 segundos', 1)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (40, 10, N'2.11 segundos', 0)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (41, 11, N'1.2 m/s^2', 0)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (42, 11, N'1.6 m/s^2', 1)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (43, 11, N'0.8 m/s^2', 0)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (44, 11, N'2.0 m/s^2', 0)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (45, 12, N'28.70 m/s', 0)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (46, 12, N'33.25 m/s', 0)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (47, 12, N'35.50 m/s', 0)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (48, 12, N'31.30 m/s', 1)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (50, 13, N'20 m/s', 0)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (51, 13, N'40 m/s', 1)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (52, 13, N'4 m/s', 0)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (53, 13, N'80 m/s', 0)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (54, 14, N'5 segundos', 1)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (55, 14, N'3 segundos', 0)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (56, 14, N'2.5 segundos', 0)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (57, 14, N'8 segundos', 0)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (58, 15, N'240 m/s', 0)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (59, 15, N'260 m/s', 0)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (60, 15, N'210 m/s', 1)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (61, 15, N'230 m/s', 0)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (63, 17, N'2.5 segundos', 0)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (64, 17, N'4 segundos', 0)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (65, 17, N'7 segundos', 0)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (66, 17, N'5 segundos', 1)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (67, 18, N'2.5 segundos', 0)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (68, 18, N'4 segundos', 0)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (69, 18, N'7 segundos', 0)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (70, 18, N'5 segundos', 1)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (71, 19, N'38 m/s', 0)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (72, 19, N'34 m/s', 1)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (73, 19, N'42 m/s', 0)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (74, 19, N'44 m/s', 0)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (75, 20, N'3 segundos', 0)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (76, 20, N'5 segundos', 0)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (77, 20, N'4 segundos', 1)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (78, 20, N'6 segundos', 0)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (79, 21, N'15 m/s', 0)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (81, 21, N'17 m/s', 1)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (82, 21, N'19 m/s', 0)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (83, 21, N'21 m/s', 0)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (84, 22, N'48 m', 1)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (85, 22, N'45 m', 0)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (86, 22, N'52 m', 0)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (87, 22, N'54 m', 0)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (88, 23, N'3 segundos', 0)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (89, 23, N'2.66 segundos', 0)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (90, 23, N'4.17 segundos', 0)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (91, 23, N'3.33 segundos', 1)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (92, 25, N'98 N', 1)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (93, 25, N'88 N', 0)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (94, 25, N'92 N', 0)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (96, 25, N'86 N', 0)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (97, 26, N'49 N', 1)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (98, 26, N'57 N', 0)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (99, 26, N'43 N', 0)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (100, 26, N'52 N', 0)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (101, 27, N'30.4 N', 0)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (102, 27, N'29.8 N', 0)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (103, 27, N'27.6 N', 1)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (104, 27, N'31.5 N', 0)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (105, 29, N'60 N', 0)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (106, 29, N'20 N', 1)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (107, 29, N'30 N', 0)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (108, 29, N'25 N', 0)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (109, 30, N'55.7 N', 0)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (110, 30, N'57.3 N', 0)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (112, 30, N'59.5 N', 0)
GO
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (113, 30, N'53.5 N', 1)
SET IDENTITY_INSERT [dbo].[Respuestas] OFF
GO
SET IDENTITY_INSERT [dbo].[Simuladores] ON 

INSERT [dbo].[Simuladores] ([id], [titulo], [descripcion]) VALUES (1, N'MRU', N'Aprende MRU')
INSERT [dbo].[Simuladores] ([id], [titulo], [descripcion]) VALUES (2, N'MRUV', N'Aprende MRUV')
INSERT [dbo].[Simuladores] ([id], [titulo], [descripcion]) VALUES (3, N'Aceleración', N'Aprende sobre aceleración')
INSERT [dbo].[Simuladores] ([id], [titulo], [descripcion]) VALUES (4, N'Gravedad', N'Aprende sobre gavedad')
INSERT [dbo].[Simuladores] ([id], [titulo], [descripcion]) VALUES (5, N'Tensión', N'Aprende sobre tensión')
SET IDENTITY_INSERT [dbo].[Simuladores] OFF
GO
SET IDENTITY_INSERT [dbo].[Usuarios] ON 

INSERT [dbo].[Usuarios] ([id], [nombre], [contraseña], [maestro]) VALUES (1, N'Santino', N'1234', 0)
INSERT [dbo].[Usuarios] ([id], [nombre], [contraseña], [maestro]) VALUES (2, N'Enrique', N'9876', 1)
INSERT [dbo].[Usuarios] ([id], [nombre], [contraseña], [maestro]) VALUES (3, N'Facundo', N'Hola123', 0)
INSERT [dbo].[Usuarios] ([id], [nombre], [contraseña], [maestro]) VALUES (5, N'Sebastian', N'asdasd', 0)
INSERT [dbo].[Usuarios] ([id], [nombre], [contraseña], [maestro]) VALUES (6, N'Clara', N'LALALAL', 0)
INSERT [dbo].[Usuarios] ([id], [nombre], [contraseña], [maestro]) VALUES (7, N'Juan', N'abcdef', 1)
INSERT [dbo].[Usuarios] ([id], [nombre], [contraseña], [maestro]) VALUES (8, N'Bruno', N'qwerty', 0)
INSERT [dbo].[Usuarios] ([id], [nombre], [contraseña], [maestro]) VALUES (9, N'Mario', N'poiuyt', 0)
INSERT [dbo].[Usuarios] ([id], [nombre], [contraseña], [maestro]) VALUES (10, N'Emilia', N'101010', 1)
INSERT [dbo].[Usuarios] ([id], [nombre], [contraseña], [maestro]) VALUES (11, N'María', N'102938', 0)
SET IDENTITY_INSERT [dbo].[Usuarios] OFF
GO
USE [master]
GO
ALTER DATABASE [ProyectoFinal] SET  READ_WRITE 
GO
