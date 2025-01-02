import React from 'react';
import { Container } from '../ui/Container';
import { Logo } from '../ui/Logo';
import { Button } from '../ui/Button';

export function Navbar() {
  return (
    <nav className="fixed w-full bg-black/90 backdrop-blur-md z-50 border-b border-gray-800">
      <Container>
        <div className="flex justify-between h-16 items-center">
          <Logo className="text-white" />
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">How it Works</a>
            <Button variant="primary" className="bg-indigo-500 hover:bg-indigo-400">Get Started</Button>
          </div>
        </div>
      </Container>
    </nav>
  );
}