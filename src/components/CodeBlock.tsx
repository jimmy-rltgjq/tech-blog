import React from 'react';
import { Highlight, themes } from 'prism-react-renderer';

const CodeBlock = ({ children }) => {
    // 언어를 찾기위한 과정
    const className = children.props.className || '';
    const matches = className.match(/language-(?<lang>.*)/);
    const language = matches?.groups?.lang ?? '';

    return (
        <Highlight

            code={children.props.children.trim()}
            language={language}
            theme={themes.dracula}
        >
            {({ className, tokens, getLineProps, getTokenProps }) => (
                <pre className={className}>
          {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                      <span {...getTokenProps({ token, key })} />
                  ))}
              </div>
          ))}
        </pre>
            )}
        </Highlight>
    );
};

export default CodeBlock;
