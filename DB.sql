-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- 主机： 127.0.0.1
-- 生成日期： 2019-02-12 13:51:47
-- 服务器版本： 10.1.36-MariaDB
-- PHP 版本： 5.6.38

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 数据库： `hotel`
--
CREATE DATABASE IF NOT EXISTS `hotel` DEFAULT CHARACTER SET utf8 COLLATE utf8_bin;
USE `hotel`;

-- --------------------------------------------------------

--
-- 表的结构 `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `un` varchar(40) COLLATE utf8_bin NOT NULL,
  `pw` varchar(40) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- 转存表中的数据 `admin`
--

INSERT INTO `admin` (`id`, `un`, `pw`) VALUES
(1, 'admin', 'admin'),
(3, 'test', 'test');

-- --------------------------------------------------------

--
-- 表的结构 `floor`
--

CREATE TABLE `floor` (
  `id` int(11) NOT NULL,
  `floor` varchar(40) COLLATE utf8_bin NOT NULL,
  `room_num` varchar(40) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- 转存表中的数据 `floor`
--

INSERT INTO `floor` (`id`, `floor`, `room_num`) VALUES
(1, '测试楼层', '测试房间数');

-- --------------------------------------------------------

--
-- 表的结构 `hotel_order`
--

CREATE TABLE `hotel_order` (
  `id` int(11) NOT NULL,
  `room_id` varchar(40) COLLATE utf8_bin NOT NULL,
  `u_id` varchar(40) COLLATE utf8_bin NOT NULL DEFAULT '0' COMMENT '0为 进店用户',
  `in_time` varchar(100) COLLATE utf8_bin NOT NULL COMMENT '入住时间',
  `leave_time` varchar(100) COLLATE utf8_bin NOT NULL COMMENT '离店时间',
  `id_card` varchar(40) COLLATE utf8_bin NOT NULL COMMENT '以下为进店用户信息',
  `phone` varchar(40) COLLATE utf8_bin NOT NULL,
  `contact` varchar(40) COLLATE utf8_bin NOT NULL COMMENT '联系人',
  `isno` varchar(40) COLLATE utf8_bin NOT NULL DEFAULT '0' COMMENT '是否完成交易',
  `note` varchar(40) COLLATE utf8_bin NOT NULL COMMENT '备注'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- 转存表中的数据 `hotel_order`
--

INSERT INTO `hotel_order` (`id`, `room_id`, `u_id`, `in_time`, `leave_time`, `id_card`, `phone`, `contact`, `isno`, `note`) VALUES
(1, '1', '1', '14点20分', '14点21分', '', '', '', '测试', '测试'),
(2, '', '', '', '', '', '', '', '0', ''),
(3, '', '0', '大苏打', '的撒旦', 'undefined', 'undefined', 'undefined', '0', 'undefined'),
(4, '', '0', '时间', '时间', '45', '45', '456', '0', '456');

-- --------------------------------------------------------

--
-- 表的结构 `room`
--

CREATE TABLE `room` (
  `id` int(11) NOT NULL,
  `num` varchar(40) COLLATE utf8_bin NOT NULL COMMENT '房间号码',
  `type_id` varchar(40) COLLATE utf8_bin NOT NULL COMMENT '房间类型id',
  `isno` varchar(40) COLLATE utf8_bin NOT NULL COMMENT '入住状态',
  `img` longtext COLLATE utf8_bin NOT NULL COMMENT '图片描述'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- 转存表中的数据 `room`
--

INSERT INTO `room` (`id`, `num`, `type_id`, `isno`, `img`) VALUES
(1, '测试', '1', '测试', '测试');

-- --------------------------------------------------------

--
-- 表的结构 `type`
--

CREATE TABLE `type` (
  `id` int(11) NOT NULL,
  `type_name` varchar(40) COLLATE utf8_bin NOT NULL,
  `bed_num` varchar(40) COLLATE utf8_bin NOT NULL COMMENT '床的数量',
  `bed_size` varchar(40) COLLATE utf8_bin NOT NULL,
  `TV` varchar(40) COLLATE utf8_bin NOT NULL COMMENT '电视',
  `food` varchar(40) COLLATE utf8_bin NOT NULL COMMENT '早餐',
  `bathroom` varchar(40) COLLATE utf8_bin NOT NULL COMMENT '浴室',
  `inter` varchar(40) COLLATE utf8_bin NOT NULL COMMENT '网络',
  `hour` varchar(40) COLLATE utf8_bin NOT NULL COMMENT '时价',
  `day` varchar(40) COLLATE utf8_bin NOT NULL COMMENT '天价',
  `month` varchar(40) COLLATE utf8_bin NOT NULL COMMENT '月价',
  `room_area` varchar(40) COLLATE utf8_bin NOT NULL COMMENT '房间面积',
  `window` varchar(40) COLLATE utf8_bin NOT NULL COMMENT '是否有窗户'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- 转存表中的数据 `type`
--

INSERT INTO `type` (`id`, `type_name`, `bed_num`, `bed_size`, `TV`, `food`, `bathroom`, `inter`, `hour`, `day`, `month`, `room_area`, `window`) VALUES
(1, '大床房', '1', '180*180', '1', '1', '1', '1', '1', '1', '1', '1', '1');

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `un` varchar(40) COLLATE utf8_bin NOT NULL,
  `pw` varchar(40) COLLATE utf8_bin NOT NULL,
  `id_card` varchar(40) COLLATE utf8_bin NOT NULL,
  `phone` varchar(40) COLLATE utf8_bin NOT NULL,
  `sex` varchar(40) COLLATE utf8_bin NOT NULL COMMENT '性别',
  `black` varchar(40) COLLATE utf8_bin NOT NULL DEFAULT '1' COMMENT '0 为黑名单'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`id`, `un`, `pw`, `id_card`, `phone`, `sex`, `black`) VALUES
(1, '', '', '', '', '', '1'),
(2, '1', '3', '4', '5', '2', '1');

--
-- 转储表的索引
--

--
-- 表的索引 `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `floor`
--
ALTER TABLE `floor`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `hotel_order`
--
ALTER TABLE `hotel_order`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `room`
--
ALTER TABLE `room`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `type`
--
ALTER TABLE `type`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- 使用表AUTO_INCREMENT `floor`
--
ALTER TABLE `floor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- 使用表AUTO_INCREMENT `hotel_order`
--
ALTER TABLE `hotel_order`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- 使用表AUTO_INCREMENT `room`
--
ALTER TABLE `room`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- 使用表AUTO_INCREMENT `type`
--
ALTER TABLE `type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- 使用表AUTO_INCREMENT `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
