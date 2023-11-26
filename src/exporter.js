import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import DetiloesKiosk from './pages/ToyStory';
import Layout from './layout/layout';
import './App.css';
import SwitchMenu from './components/SwitchMenu';
import Footer from './components/Footer';
import Carrousell from './components/Carrousell';

export { Router, Routes, Route, useState, useEffect, DetiloesKiosk, Layout, SwitchMenu, Footer, Carrousell, useNavigate };
