import { Code } from "lucide-react"

const CodeShowcase = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black to-purple-900/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Elegant{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Code</span>,
          Powerful Results
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-black/50 backdrop-blur-sm p-6 rounded-xl border border-white/10">
            <div className="flex items-center mb-4">
              <Code className="h-6 w-6 text-blue-400 mr-2" />
              <h3 className="text-xl font-semibold">React Component</h3>
            </div>
            <pre className="text-sm text-gray-300 overflow-x-auto">
              <code>{`import React from 'react';
import { Button } from '@quantumui/core';

const MyComponent = () => {
  return (
    <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Welcome to QuantumUI</h2>
      <p className="mb-4">Build beautiful interfaces with ease.</p>
      <Button variant="secondary">Get Started</Button>
    </div>
  );
};

export default MyComponent;`}</code>
            </pre>
          </div>
          <div className="bg-black/50 backdrop-blur-sm p-6 rounded-xl border border-white/10">
            <div className="flex items-center mb-4">
              <Code className="h-6 w-6 text-green-400 mr-2" />
              <h3 className="text-xl font-semibold">Styled Component</h3>
            </div>
            <pre className="text-sm text-gray-300 overflow-x-auto">
              <code>{`import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Card = styled(motion.div)\`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  padding: 20px;
  color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
\`;

// Usage
<Card
  whileHover={{ scale: 1.05 }}
  transition={{ type: "spring", stiffness: 300 }}
>
  <h3>Interactive Card</h3>
  <p>Hover to see the animation!</p>
</Card>`}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CodeShowcase

