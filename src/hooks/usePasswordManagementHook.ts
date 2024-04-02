// LIBRARIES
import { useState } from "react";

export const usePasswordTypeToggle = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return { showPassword, handleTogglePassword };
};
