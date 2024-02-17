import React from 'react';
import { useToastState, Toast as TToast } from '@tamagui/toast';
import { XStack, YStack } from 'tamagui';
import Colors from '@/constants/Colors';
import { MaterialIcons } from '@expo/vector-icons';

const Toast = () => {
  const currentToast = useToastState();

  if (!currentToast || currentToast.isHandledNatively) return null;

  const generateStyle = (type: 'error' | 'success') => {
    let baseStyle = {
      container: {
        borderColor: Colors.success,
        backgroundColor: Colors.lightGreen,
      },
      title: {
        color: Colors.white,
      },
      description: {
        color: Colors.white,
      },
    };

    switch (type) {
      case 'error':
        baseStyle = {
          container: {
            borderColor: Colors.error,
            backgroundColor: Colors.lightRed,
          },
          title: {
            color: Colors.error,
          },
          description: {
            color: Colors.error,
          },
        };
        return baseStyle;
      default:
        return baseStyle;
    }
  };

  const styles = generateStyle(currentToast.type);

  return (
    <TToast
      key={currentToast.id}
      duration={currentToast.duration}
      enterStyle={{ opacity: 0, scale: 0.5, y: -25 }}
      exitStyle={{ opacity: 0, scale: 1, y: -20 }}
      y={0}
      opacity={1}
      scale={1}
      animation='100ms'
      viewportName={currentToast.viewportName}
      borderWidth={1}
      style={styles?.container}
    >
      <YStack>
        <XStack justifyContent='center' alignItems='center' gap='$2'>
          {currentToast?.type == 'error' ? (
            <MaterialIcons
              name='error-outline'
              color={Colors.error}
              size={20}
            />
          ) : (
            <MaterialIcons name='done-all' color={Colors.white} size={20} />
          )}
          <TToast.Title style={styles?.title}>
            {currentToast.title}
          </TToast.Title>
        </XStack>
        {!!currentToast.message && (
          <TToast.Description style={styles?.description}>
            {currentToast.message}
          </TToast.Description>
        )}
        <TToast.Close />
      </YStack>
    </TToast>
  );
};

export default Toast;
