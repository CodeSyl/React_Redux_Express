import React, { Component } from 'react';
import { Route, IndexRoute } from 'react-router';

import News from '../News/News';
import Home from '../Home/Home';
import About from '../About/About';
import Layout from '../Layout/Layout';
import Contact from '../Contact/Contact';
import Products from '../Products/Products';

export default (
    <Route path="/" component={Layout}>
        <IndexRoute component={Home}></IndexRoute>
        <Route path="news" name="news" component={News}></Route>
        <Route path="about" name="about" component={About}></Route>
        <Route path="products" name="products" component={Products}></Route>
        <Route path="contact" name="contact" component={Contact}></Route>
    </Route>
)

