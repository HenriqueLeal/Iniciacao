-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 04-Out-2017 às 22:41
-- Versão do servidor: 5.7.14
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `estacionamentointeligente`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `admin`
--

CREATE TABLE `admin` (
  `CODIGO` int(11) NOT NULL,
  `LOGIN` varchar(15) COLLATE utf8_bin NOT NULL,
  `SENHA` varchar(15) COLLATE utf8_bin NOT NULL,
  `NOMECOMPLETO` varchar(40) COLLATE utf8_bin NOT NULL,
  `CPF` varchar(11) COLLATE utf8_bin NOT NULL,
  `TELEFONE` varchar(11) COLLATE utf8_bin NOT NULL,
  `EMAIL` varchar(60) COLLATE utf8_bin NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Extraindo dados da tabela `admin`
--

INSERT INTO `admin` (`CODIGO`, `LOGIN`, `SENHA`, `NOMECOMPLETO`, `CPF`, `TELEFONE`, `EMAIL`) VALUES
(1, 'JOKER', 'masterkey1919', 'Henrique Leal', '43901973800', '14996432747', 'henrique.tavares@fatec.sp.gov.br');

-- --------------------------------------------------------

--
-- Estrutura da tabela `carro`
--

CREATE TABLE `carro` (
  `CARRO` int(11) NOT NULL,
  `USUARIO` int(11) NOT NULL,
  `PLACA` varchar(7) COLLATE utf8_bin NOT NULL,
  `MODELO` varchar(20) COLLATE utf8_bin NOT NULL,
  `MONTADORA` varchar(20) COLLATE utf8_bin NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Extraindo dados da tabela `carro`
--

INSERT INTO `carro` (`CARRO`, `USUARIO`, `PLACA`, `MODELO`, `MONTADORA`) VALUES
(1, 1, 'HGF9878', 'I30', 'HYUNDAI'),
(2, 1, 'teste', '123', '123'),
(3, 5, 'jose', 'jose carro', 'jsuar');

-- --------------------------------------------------------

--
-- Estrutura da tabela `relentsai`
--

CREATE TABLE `relentsai` (
  `CODIGO` int(11) NOT NULL,
  `USUARIO` int(11) NOT NULL,
  `DATAHORA` timestamp NOT NULL,
  `TIPO` varchar(1) COLLATE utf8_bin NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Extraindo dados da tabela `relentsai`
--

INSERT INTO `relentsai` (`CODIGO`, `USUARIO`, `DATAHORA`, `TIPO`) VALUES
(4, 4, '2017-09-12 00:45:55', 'S'),
(3, 1, '2017-09-12 00:45:05', 'E'),
(2, 2, '2017-06-07 01:43:14', 'E'),
(1, 1, '2017-06-07 01:37:45', 'E'),
(5, 1, '2017-09-15 23:02:08', 'E');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tipousuario`
--

CREATE TABLE `tipousuario` (
  `TIPO` int(11) NOT NULL,
  `DESCRICAO` varchar(15) COLLATE utf8_bin NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Extraindo dados da tabela `tipousuario`
--

INSERT INTO `tipousuario` (`TIPO`, `DESCRICAO`) VALUES
(1, 'ALUNO'),
(2, 'PROFESSOR'),
(3, 'VISITANTE'),
(4, 'OUTRO');

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuario`
--

CREATE TABLE `usuario` (
  `USUARIO` int(11) NOT NULL,
  `TIPOUSUARIO` int(11) NOT NULL,
  `NOME` varchar(40) COLLATE utf8_bin NOT NULL,
  `CPF` varchar(11) COLLATE utf8_bin NOT NULL,
  `TELEFONE` varchar(11) COLLATE utf8_bin NOT NULL,
  `EMAIL` varchar(60) COLLATE utf8_bin NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Extraindo dados da tabela `usuario`
--

INSERT INTO `usuario` (`USUARIO`, `TIPOUSUARIO`, `NOME`, `CPF`, `TELEFONE`, `EMAIL`) VALUES
(1, 1, 'Henrique Leal Tavares', '43901973800', '14996432747', 'henrique.tavares@fatec.sp.gov.br'),
(2, 1, 'Joao Cardia', '12345678909', '14998767634', 'joaozinho@jgmail.com'),
(4, 1, 'bruno', '12345', '12345', 'bruno@bruno'),
(3, 3, 'Breno Benicio', '1928748271', '1499875281', 'breno@fatec.com'),
(5, 1, 'Usuario Teste', '12345678909', '1491875343', 'usuario.teste@gmail.com');

-- --------------------------------------------------------

--
-- Estrutura da tabela `vagas`
--

CREATE TABLE `vagas` (
  `VAGAS` int(11) NOT NULL,
  `CARRO` int(11) NOT NULL,
  `DESCRICAO` varchar(10) COLLATE utf8_bin NOT NULL,
  `OCUPADA` tinyint(1) NOT NULL,
  `ATIVA` tinyint(1) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`CODIGO`);

--
-- Indexes for table `carro`
--
ALTER TABLE `carro`
  ADD PRIMARY KEY (`CARRO`),
  ADD KEY `fk_usuario` (`USUARIO`);

--
-- Indexes for table `relentsai`
--
ALTER TABLE `relentsai`
  ADD PRIMARY KEY (`CODIGO`);

--
-- Indexes for table `tipousuario`
--
ALTER TABLE `tipousuario`
  ADD PRIMARY KEY (`TIPO`);

--
-- Indexes for table `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`USUARIO`),
  ADD KEY `fk_tipousuario` (`TIPOUSUARIO`);

--
-- Indexes for table `vagas`
--
ALTER TABLE `vagas`
  ADD PRIMARY KEY (`VAGAS`),
  ADD KEY `fk_carro` (`CARRO`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `CODIGO` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `carro`
--
ALTER TABLE `carro`
  MODIFY `CARRO` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `relentsai`
--
ALTER TABLE `relentsai`
  MODIFY `CODIGO` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `tipousuario`
--
ALTER TABLE `tipousuario`
  MODIFY `TIPO` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `usuario`
--
ALTER TABLE `usuario`
  MODIFY `USUARIO` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `vagas`
--
ALTER TABLE `vagas`
  MODIFY `VAGAS` int(11) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
