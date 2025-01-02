import React from 'react';
import { Container } from '../ui/Container';
import { Logo } from '../ui/Logo';

export function Footer() {
  return (
    <footer className="bg-white">
      <Container>
        <div className="py-12">
          <div className="flex justify-between items-center">
            <Logo />
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-gray-500">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-gray-500">Terms</a>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-8">
            <p className="text-base text-gray-400 text-center">
              &copy; {new Date().getFullYear()} ProCLens.ai. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}