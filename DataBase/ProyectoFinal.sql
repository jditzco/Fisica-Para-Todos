USE [master]
GO
/****** Object:  Database [ProyectoFinal]    Script Date: 17/11/2023 08:55:01 ******/
CREATE DATABASE [ProyectoFinal]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'ProyectoFinal', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\ProyectoFinal.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'ProyectoFinal_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\ProyectoFinal_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
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
EXEC sys.sp_db_vardecimal_storage_format N'ProyectoFinal', N'ON'
GO
ALTER DATABASE [ProyectoFinal] SET QUERY_STORE = OFF
GO
USE [ProyectoFinal]
GO
/****** Object:  User [alumno]    Script Date: 17/11/2023 08:55:01 ******/
CREATE USER [alumno] FOR LOGIN [alumno] WITH DEFAULT_SCHEMA=[dbo]
GO
/****** Object:  Table [dbo].[Ejercicios]    Script Date: 17/11/2023 08:55:01 ******/
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
/****** Object:  Table [dbo].[Preguntas]    Script Date: 17/11/2023 08:55:01 ******/
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
/****** Object:  Table [dbo].[Productos]    Script Date: 17/11/2023 08:55:01 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Productos](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [varchar](50) NULL,
	[Descripcion] [varchar](50) NULL,
	[FechaVencimiento] [datetime] NULL,
	[Precio] [float] NULL,
 CONSTRAINT [PK_Productos] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Respuestas]    Script Date: 17/11/2023 08:55:01 ******/
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
/****** Object:  Table [dbo].[Simuladores]    Script Date: 17/11/2023 08:55:01 ******/
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
/****** Object:  Table [dbo].[Usuarios]    Script Date: 17/11/2023 08:55:01 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Usuarios](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[gmail] [varchar](50) NOT NULL,
	[nombre] [varchar](50) NOT NULL,
	[contraseña] [varchar](50) NOT NULL,
	[progreso] [int] NOT NULL,
	[estrellas] [int] NOT NULL,
	[maestro] [bit] NOT NULL,
	[foto] [text] NOT NULL,
	[edad] [int] NOT NULL,
 CONSTRAINT [PK_Usuarios] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Ejercicios] ON 

INSERT [dbo].[Ejercicios] ([id], [titulo], [descripcion], [dificultad]) VALUES (1, N'Gravedad', N'haz ejercicios sobre Grevedad', 1)
INSERT [dbo].[Ejercicios] ([id], [titulo], [descripcion], [dificultad]) VALUES (2, N'Caida Libre', N'haz ejercicios sobre Caida Libre', 2)
INSERT [dbo].[Ejercicios] ([id], [titulo], [descripcion], [dificultad]) VALUES (3, N'Aceleración', N'haz ejercicios sobre Aceleracion', 2)
INSERT [dbo].[Ejercicios] ([id], [titulo], [descripcion], [dificultad]) VALUES (5, N'Termodinámica', N'haz ejercicios sobre Termodinamica', 3)
INSERT [dbo].[Ejercicios] ([id], [titulo], [descripcion], [dificultad]) VALUES (9, N'Movimiento rectilíneo uniformemente variado (MRUV)', N'Resolvé estos ejercicios sobre MRUV', 2)
INSERT [dbo].[Ejercicios] ([id], [titulo], [descripcion], [dificultad]) VALUES (12, N'Tensión', N'Resolvé estos ejercicios sobre tensión', 3)
SET IDENTITY_INSERT [dbo].[Ejercicios] OFF
GO
SET IDENTITY_INSERT [dbo].[Preguntas] ON 

INSERT [dbo].[Preguntas] ([id], [pregunta], [idEjercicio]) VALUES (1, N'Cuál será la fuerza de gravedad aplicada a un objeto con una masa de 40g?', 1)
INSERT [dbo].[Preguntas] ([id], [pregunta], [idEjercicio]) VALUES (2, N'Cuál será la velocidad de un objeto con una masa de 20g al caer por 5 segundos?', 2)
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

INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (1, 1, N'0.392 N', 1)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (2, 1, N'0.431 N', 0)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (3, 1, N'22', 0)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (4, 1, N'0.356 N', 1)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (5, 2, N'16', 0)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (6, 1, N'0.422 N', 0)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (7, 2, N'49 m/s', 1)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (8, 2, N'59 m/s', 0)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (9, 2, N'39 m/s', 0)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (10, 3, N'16', 1)
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (11, 2, N'69 m/s', 0)
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
GO
INSERT [dbo].[Respuestas] ([id], [idPregunta], [respuesta], [correcta]) VALUES (112, 30, N'59.5 N', 0)
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

INSERT [dbo].[Usuarios] ([id], [gmail], [nombre], [contraseña], [progreso], [estrellas], [maestro], [foto], [edad]) VALUES (1, N'aswdasd@gmail.com', N'Santino', N'1234', 0, 1, 0, N'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png', 0)
INSERT [dbo].[Usuarios] ([id], [gmail], [nombre], [contraseña], [progreso], [estrellas], [maestro], [foto], [edad]) VALUES (2, N'adwaad@gmail.com', N'Enrique', N'9876', 0, 2, 1, N'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png', 0)
INSERT [dbo].[Usuarios] ([id], [gmail], [nombre], [contraseña], [progreso], [estrellas], [maestro], [foto], [edad]) VALUES (3, N'ggrhasd@gmail.com', N'Facundo', N'Hola123', 0, 2, 0, N'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png', 0)
INSERT [dbo].[Usuarios] ([id], [gmail], [nombre], [contraseña], [progreso], [estrellas], [maestro], [foto], [edad]) VALUES (5, N'asntmd@gmail.com', N'Sebastian', N'asdasd', 0, 1, 0, N'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png', 0)
INSERT [dbo].[Usuarios] ([id], [gmail], [nombre], [contraseña], [progreso], [estrellas], [maestro], [foto], [edad]) VALUES (6, N'asmykd@gmail.com', N'Clara', N'LALALAL', 0, 0, 0, N'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png', 0)
INSERT [dbo].[Usuarios] ([id], [gmail], [nombre], [contraseña], [progreso], [estrellas], [maestro], [foto], [edad]) VALUES (7, N'asascd@gmail.com', N'Juan', N'abcdef', 0, 0, 1, N'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png', 0)
INSERT [dbo].[Usuarios] ([id], [gmail], [nombre], [contraseña], [progreso], [estrellas], [maestro], [foto], [edad]) VALUES (8, N'asfrwsd@gmail.com', N'Bruno', N'qwerty', 0, 1, 0, N'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png', 0)
INSERT [dbo].[Usuarios] ([id], [gmail], [nombre], [contraseña], [progreso], [estrellas], [maestro], [foto], [edad]) VALUES (9, N'aaxcvsd@gmail.com', N'Mario', N'poiuyt', 0, 1, 0, N'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png', 0)
INSERT [dbo].[Usuarios] ([id], [gmail], [nombre], [contraseña], [progreso], [estrellas], [maestro], [foto], [edad]) VALUES (10, N'agsdwger@gmail.com', N'Emilia', N'101010', 0, 3, 1, N'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png', 0)
INSERT [dbo].[Usuarios] ([id], [gmail], [nombre], [contraseña], [progreso], [estrellas], [maestro], [foto], [edad]) VALUES (11, N'aesd@gmail.com', N'María', N'102938', 0, 3, 0, N'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png', 0)
INSERT [dbo].[Usuarios] ([id], [gmail], [nombre], [contraseña], [progreso], [estrellas], [maestro], [foto], [edad]) VALUES (12, N'agbfsd@gmail.com', N'juan', N'215824', 0, 5, 1, N'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png', 0)
INSERT [dbo].[Usuarios] ([id], [gmail], [nombre], [contraseña], [progreso], [estrellas], [maestro], [foto], [edad]) VALUES (13, N'abfdssd@gmail.com', N'juan', N'215824', 0, 4, 1, N'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png', 0)
INSERT [dbo].[Usuarios] ([id], [gmail], [nombre], [contraseña], [progreso], [estrellas], [maestro], [foto], [edad]) VALUES (14, N'aasdsd@gmail.com', N'pablo', N'56321', 0, 8, 0, N'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png', 0)
INSERT [dbo].[Usuarios] ([id], [gmail], [nombre], [contraseña], [progreso], [estrellas], [maestro], [foto], [edad]) VALUES (15, N'jor@gmail.con', N'neg', N'aa1.', 0, 5, 0, N'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png', 0)
INSERT [dbo].[Usuarios] ([id], [gmail], [nombre], [contraseña], [progreso], [estrellas], [maestro], [foto], [edad]) VALUES (20, N'mae@gmail.com', N'maestro', N'qq1.', 0, 5, 1, N'data:image/jpeg;base64,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', 0)
INSERT [dbo].[Usuarios] ([id], [gmail], [nombre], [contraseña], [progreso], [estrellas], [maestro], [foto], [edad]) VALUES (21, N'gmail@gmail.com', N'nombre_usuario', N'contraseña_segura', 0, 0, 1, N'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png', 25)
SET IDENTITY_INSERT [dbo].[Usuarios] OFF
GO
USE [master]
GO
ALTER DATABASE [ProyectoFinal] SET  READ_WRITE 
GO
