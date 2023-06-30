USE [master]
GO
/****** Object:  Database [ProyectoFinal]    Script Date: 29/6/2023 22:43:17 ******/
CREATE DATABASE [ProyectoFinal]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'ProyectoFinal', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\ProyectoFinal.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'ProyectoFinal_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\ProyectoFinal_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
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
ALTER DATABASE [ProyectoFinal] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
ALTER DATABASE [ProyectoFinal] SET QUERY_STORE = OFF
GO
USE [ProyectoFinal]
GO
/****** Object:  User [Proyecto]    Script Date: 29/6/2023 22:43:18 ******/
CREATE USER [Proyecto] FOR LOGIN [Proyecto] WITH DEFAULT_SCHEMA=[dbo]
GO
/****** Object:  Table [dbo].[Ejercicios]    Script Date: 29/6/2023 22:43:18 ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Preguntas]    Script Date: 29/6/2023 22:43:18 ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Respuestas]    Script Date: 29/6/2023 22:43:18 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Respuestas](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[idPreguntas] [int] NOT NULL,
	[respuesta] [text] NOT NULL,
	[correcta] [bit] NOT NULL,
 CONSTRAINT [PK_Respuestas] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Ejercicios] ON 

INSERT [dbo].[Ejercicios] ([id], [titulo], [descripcion], [dificultad]) VALUES (1, N'Gravedad', N'haz ejercicios sobre Grevedad', 1)
INSERT [dbo].[Ejercicios] ([id], [titulo], [descripcion], [dificultad]) VALUES (2, N'Caida Libre', N'haz ejercicios sobre Caida Libre', 2)
INSERT [dbo].[Ejercicios] ([id], [titulo], [descripcion], [dificultad]) VALUES (3, N'Aceleración', N'haz ejercicios sobre Aceleracion', 2)
INSERT [dbo].[Ejercicios] ([id], [titulo], [descripcion], [dificultad]) VALUES (5, N'Termodinámica', N'haz ejercicios sobre Termodinamica', 3)
SET IDENTITY_INSERT [dbo].[Ejercicios] OFF
GO
SET IDENTITY_INSERT [dbo].[Preguntas] ON 

INSERT [dbo].[Preguntas] ([id], [pregunta], [idEjercicio]) VALUES (1, N'Cuál será la fuerza de gravedad aplicada a un objeto con una masa de 40g?', 1)
INSERT [dbo].[Preguntas] ([id], [pregunta], [idEjercicio]) VALUES (2, N'Cuál será la velocidad de un objeto con una masa de 20g al caer por 5 segundos?', 2)
SET IDENTITY_INSERT [dbo].[Preguntas] OFF
GO
SET IDENTITY_INSERT [dbo].[Respuestas] ON 

INSERT [dbo].[Respuestas] ([id], [idPreguntas], [respuesta], [correcta]) VALUES (1, 1, N'0.392 N', 1)
INSERT [dbo].[Respuestas] ([id], [idPreguntas], [respuesta], [correcta]) VALUES (2, 1, N'0.431 N', 0)
INSERT [dbo].[Respuestas] ([id], [idPreguntas], [respuesta], [correcta]) VALUES (4, 1, N'0.356 N', 1)
INSERT [dbo].[Respuestas] ([id], [idPreguntas], [respuesta], [correcta]) VALUES (6, 1, N'0.422 N', 0)
INSERT [dbo].[Respuestas] ([id], [idPreguntas], [respuesta], [correcta]) VALUES (7, 2, N'49 m/s', 1)
INSERT [dbo].[Respuestas] ([id], [idPreguntas], [respuesta], [correcta]) VALUES (8, 2, N'59 m/s', 0)
INSERT [dbo].[Respuestas] ([id], [idPreguntas], [respuesta], [correcta]) VALUES (9, 2, N'39 m/s', 0)
INSERT [dbo].[Respuestas] ([id], [idPreguntas], [respuesta], [correcta]) VALUES (11, 2, N'69 m/s', 0)
SET IDENTITY_INSERT [dbo].[Respuestas] OFF
GO
USE [master]
GO
ALTER DATABASE [ProyectoFinal] SET  READ_WRITE 
GO
